/* ==========================================================================
   PC-BA Simulado 01 — Engine Interativa de Prova
   ========================================================================== */

(function () {
  const STORAGE_KEY = "pcba_simulado_01_state_v1";
  const LETTERS = ["A", "B", "C", "D", "E"];

  // Estado persistente
  const defaultState = () => ({
    currentQuestion: 1,
    answers: {},        // { "1": "A", ... }
    flagged: {},        // { "1": true, ... }
    eliminated: {},     // { "1": ["B", "D"], ... }
    notes: {},          // { "1": "texto...", ... }
    answerKey: Object.keys(OFFICIAL_ANSWER_KEY || {}).length ? { ...OFFICIAL_ANSWER_KEY } : {},
    graded: false,
    studyMode: false,
    remainingSeconds: EXAM_META.durationSeconds,
    timerRunning: false,
    lightTheme: false,
    supportTextCollapsed: false
  });

  let state = loadState();
  let filterDiscipline = "all";
  let filterStatus = "all";
  let timerInterval = null;
  let toastTimeout = null;

  // Referências DOM
  const els = {
    timerWidget: document.getElementById("timerWidget"),
    timerDisplay: document.getElementById("timerDisplay"),
    toggleTimerBtn: document.getElementById("toggleTimerBtn"),
    resetTimerBtn: document.getElementById("resetTimerBtn"),
    topProgressBar: document.getElementById("topProgressBar"),
    studyModeBtn: document.getElementById("studyModeBtn"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),

    gradedBanner: document.getElementById("gradedBanner"),
    gradedBannerStats: document.getElementById("gradedBannerStats"),
    openReportBtn: document.getElementById("openReportBtn"),
    filterErrorsQuickBtn: document.getElementById("filterErrorsQuickBtn"),
    clearGradeBtn: document.getElementById("clearGradeBtn"),

    supportTextCard: document.getElementById("supportTextCard"),
    supportTextToggle: document.getElementById("supportTextToggle"),
    supportTextTitle: document.getElementById("supportTextTitle"),
    supportTextBody: document.getElementById("supportTextBody"),
    supportTextArrow: document.getElementById("supportTextArrow"),

    qNumberBadge: document.getElementById("qNumberBadge"),
    qDisciplineBadge: document.getElementById("qDisciplineBadge"),
    qGradedStatus: document.getElementById("qGradedStatus"),
    flagBtn: document.getElementById("flagBtn"),
    clearAnswerBtn: document.getElementById("clearAnswerBtn"),
    qStem: document.getElementById("qStem"),
    optionsList: document.getElementById("optionsList"),
    explanationCard: document.getElementById("explanationCard"),
    explanationBadge: document.getElementById("explanationBadge"),
    explanationTopic: document.getElementById("explanationTopic"),
    explanationText: document.getElementById("explanationText"),

    notesToggleBtn: document.getElementById("notesToggleBtn"),
    notesToggleLabel: document.getElementById("notesToggleLabel"),
    notesTextarea: document.getElementById("notesTextarea"),

    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    nextUnansweredBtn: document.getElementById("nextUnansweredBtn"),

    statAnswered: document.getElementById("statAnswered"),
    statBlank: document.getElementById("statBlank"),
    statFlagged: document.getElementById("statFlagged"),
    disciplineFilter: document.getElementById("disciplineFilter"),
    statusFilterPills: document.getElementById("statusFilterPills"),
    pillWrong: document.getElementById("pillWrong"),
    pillCorrect: document.getElementById("pillCorrect"),
    questionGrid: document.getElementById("questionGrid"),

    openSheetBtn: document.getElementById("openSheetBtn"),
    sheetModal: document.getElementById("sheetModal"),
    bubbleSheetContainer: document.getElementById("bubbleSheetContainer"),
    copyAnswersBtn: document.getElementById("copyAnswersBtn"),

    openGabaritoBtn: document.getElementById("openGabaritoBtn"),
    gabaritoModal: document.getElementById("gabaritoModal"),
    gabaritoSummaryInfo: document.getElementById("gabaritoSummaryInfo"),
    gabaritoInput: document.getElementById("gabaritoInput"),
    gabaritoParseStatus: document.getElementById("gabaritoParseStatus"),
    applyGabaritoBtn: document.getElementById("applyGabaritoBtn"),

    reportModal: document.getElementById("reportModal"),
    reportSummaryGrid: document.getElementById("reportSummaryGrid"),
    disciplineReportList: document.getElementById("disciplineReportList"),
    copyReportBtn: document.getElementById("copyReportBtn"),

    exportBackupBtn: document.getElementById("exportBackupBtn"),
    importBackupInput: document.getElementById("importBackupInput"),
    resetAllBtn: document.getElementById("resetAllBtn"),
    toast: document.getElementById("toast")
  };

  // =========================================================================
  // Persistência
  // =========================================================================
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      const merged = { ...defaultState(), ...parsed };
      // Se um gabarito oficial foi embutido posteriormente em questions.js, carrega automaticamente
      if (Object.keys(OFFICIAL_ANSWER_KEY || {}).length === 100 && Object.keys(merged.answerKey || {}).length === 0) {
        merged.answerKey = { ...OFFICIAL_ANSWER_KEY };
      }
      merged.timerRunning = false;
      return merged;
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn("Não foi possível salvar no localStorage:", err);
    }
  }

  // =========================================================================
  // Helpers
  // =========================================================================
  function getDisciplineById(id) {
    return DISCIPLINES.find(d => d.id === id) || { name: "Geral", short: "Geral", color: "#3b82f6" };
  }

  function getQuestion(num) {
    return QUESTIONS[num - 1];
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function formatTime(totalSec) {
    const safe = Math.max(0, totalSec);
    const h = Math.floor(safe / 3600);
    const m = Math.floor((safe % 3600) / 60);
    const s = safe % 60;
    return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
  }

  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => els.toast.classList.remove("show"), 2600);
  }

  function shouldRevealQuestion(num) {
    if (state.graded) return true;
    return !!(state.studyMode && state.answers[num]);
  }

  function isQuestionCorrect(num) {
    if (!shouldRevealQuestion(num)) return null;
    const key = state.answerKey[num];
    const user = state.answers[num];
    if (!key) return null;
    if (!user) return "blank";
    return user === key ? "correct" : "wrong";
  }

  // =========================================================================
  // Tema Claro / Escuro & Modo Estudo
  // =========================================================================
  function applyTheme() {
    document.body.classList.toggle("light-theme", !!state.lightTheme);
    els.themeToggleBtn.textContent = state.lightTheme ? "🌙 Modo Escuro" : "☀️ Modo Claro";
  }

  function renderStudyModeBtn() {
    els.studyModeBtn.classList.toggle("btn-study-active", !!state.studyMode);
    els.studyModeBtn.textContent = state.studyMode ? "📚 Modo Estudo (ON)" : "🎯 Modo Prova";
  }

  // =========================================================================
  // Cronômetro
  // =========================================================================
  function renderTimer() {
    els.timerDisplay.textContent = formatTime(state.remainingSeconds);
    els.toggleTimerBtn.textContent = state.timerRunning ? "⏸" : "▶";
    els.timerWidget.classList.remove("warning", "danger");
    if (state.remainingSeconds <= 15 * 60) {
      els.timerWidget.classList.add("danger");
    } else if (state.remainingSeconds <= 45 * 60) {
      els.timerWidget.classList.add("warning");
    }
  }

  function startTimer() {
    if (state.timerRunning) return;
    if (state.remainingSeconds <= 0) {
      showToast("O tempo da prova acabou! Clique em ↺ para reiniciar o cronômetro.");
      return;
    }
    state.timerRunning = true;
    renderTimer();
    timerInterval = setInterval(() => {
      if (state.remainingSeconds > 0) {
        state.remainingSeconds -= 1;
        renderTimer();
        if (state.remainingSeconds % 5 === 0) saveState();
      } else {
        pauseTimer();
        showToast("⏰ Tempo regulamentar de 04h00min encerrado!");
      }
    }, 1000);
  }

  function pauseTimer() {
    state.timerRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;
    renderTimer();
    saveState();
  }

  // =========================================================================
  // Renderização Principal
  // =========================================================================
  function populateDisciplineSelect() {
    els.disciplineFilter.innerHTML = `<option value="all">Todas as Disciplinas (1–100)</option>`;
    DISCIPLINES.forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = `${d.name} (${d.range[0]}–${d.range[1]})`;
      els.disciplineFilter.appendChild(opt);
    });
  }

  function renderSupportText(question) {
    if (!question.supportTextId || !SUPPORT_TEXTS[question.supportTextId]) {
      els.supportTextCard.classList.add("hidden");
      return;
    }
    const textObj = SUPPORT_TEXTS[question.supportTextId];
    els.supportTextCard.classList.remove("hidden");
    els.supportTextTitle.textContent = `Texto de Apoio — ${textObj.title}`;

    if (!els.supportTextBody.dataset.loaded) {
      els.supportTextBody.innerHTML = textObj.paragraphs
        .map((p, idx) => `
          <div class="support-paragraph">
            <span class="para-num">${idx + 1}º §</span>
            <p>${p}</p>
          </div>
        `)
        .join("") + `<p class="support-source">${textObj.source}</p>`;
      els.supportTextBody.dataset.loaded = "1";
    }

    els.supportTextBody.classList.toggle("collapsed", !!state.supportTextCollapsed);
    els.supportTextArrow.textContent = state.supportTextCollapsed ? "Expandir ▼" : "Ocultar ▲";
  }

  function renderQuestion() {
    const num = state.currentQuestion;
    const q = getQuestion(num);
    const disc = getDisciplineById(q.disciplineId);
    const selected = state.answers[num] || null;
    const isFlagged = !!state.flagged[num];
    const eliminatedList = state.eliminated[num] || [];
    const revealed = shouldRevealQuestion(num);
    const correctKey = revealed ? state.answerKey[num] : null;

    // Cabeçalho da questão
    els.qNumberBadge.textContent = `Questão ${pad2(num)} / ${EXAM_META.totalQuestions}`;
    els.qDisciplineBadge.textContent = disc.name;
    els.qDisciplineBadge.style.borderColor = disc.color + "55";
    els.qDisciplineBadge.style.color = disc.color;

    // Status de correção na questão
    if (revealed && correctKey) {
      els.qGradedStatus.style.display = "inline-flex";
      els.qGradedStatus.className = "q-status-pill";
      if (!selected) {
        els.qGradedStatus.classList.add("blank-graded");
        els.qGradedStatus.textContent = `Em branco • Gabarito: ${correctKey}`;
      } else if (selected === correctKey) {
        els.qGradedStatus.classList.add("correct");
        els.qGradedStatus.textContent = `✓ Acertou (${correctKey})`;
      } else {
        els.qGradedStatus.classList.add("wrong");
        els.qGradedStatus.textContent = `✗ Errou • Marcada: ${selected} | Gabarito: ${correctKey}`;
      }
    } else {
      els.qGradedStatus.style.display = "none";
    }

    // Botão revisão
    els.flagBtn.classList.toggle("flagged", isFlagged);
    els.flagBtn.textContent = isFlagged ? "🚩 Marcada p/ revisão" : "🚩 Revisar depois";
    els.clearAnswerBtn.disabled = !selected || state.graded;

    // Texto de apoio
    renderSupportText(q);

    // Enunciado
    els.qStem.textContent = q.stem;

    // Alternativas
    els.optionsList.innerHTML = "";
    LETTERS.forEach(letter => {
      const row = document.createElement("div");
      row.className = "option-row";
      if (selected === letter) row.classList.add("selected");
      if (eliminatedList.includes(letter)) row.classList.add("eliminated");

      if (revealed && correctKey) {
        if (letter === correctKey) {
          row.classList.add("graded-correct");
        } else if (selected === letter && selected !== correctKey) {
          row.classList.add("graded-wrong");
        }
      }

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", selected === letter ? "true" : "false");
      btn.innerHTML = `
        <span class="option-letter">${letter}</span>
        <span class="option-text">${q.options[letter]}</span>
      `;
      btn.addEventListener("click", () => selectOption(num, letter));
      btn.addEventListener("contextmenu", e => {
        e.preventDefault();
        toggleEliminate(num, letter);
      });

      const elimBtn = document.createElement("button");
      elimBtn.type = "button";
      elimBtn.className = "eliminate-btn";
      elimBtn.title = eliminatedList.includes(letter) ? "Desfazer risco" : "Riscar/eliminar alternativa";
      elimBtn.textContent = "✂";
      elimBtn.addEventListener("click", () => toggleEliminate(num, letter));

      row.appendChild(btn);
      row.appendChild(elimBtn);
      els.optionsList.appendChild(row);
    });

    // Gabarito Comentado (exibido após correção ou no Modo Estudo ao responder)
    const exp = typeof OFFICIAL_EXPLANATIONS !== "undefined" ? OFFICIAL_EXPLANATIONS[num] : null;
    if (revealed && correctKey && exp) {
      els.explanationCard.classList.remove("hidden");
      els.explanationCard.classList.toggle("wrong-context", !!(selected && selected !== correctKey));
      els.explanationBadge.textContent = `Gabarito: ${correctKey}`;
      els.explanationTopic.textContent = exp.topic || "Comentário Oficial";
      els.explanationText.textContent = exp.text || "";
    } else {
      els.explanationCard.classList.add("hidden");
    }

    // Rascunho / Anotação
    const noteText = state.notes[num] || "";
    els.notesTextarea.value = noteText;
    const hasNote = noteText.trim().length > 0;
    els.notesTextarea.classList.toggle("hidden", !hasNote);
    els.notesToggleLabel.textContent = hasNote
      ? "Ocultar rascunho / anotação (salva)"
      : "Abrir rascunho / anotação desta questão";

    // Navegação
    els.prevBtn.disabled = num <= 1;
    els.nextBtn.textContent = num >= EXAM_META.totalQuestions ? "Ver Folha de Respostas 📋" : "Próxima →";
  }

  function renderSidebarAndProgress() {
    const answeredCount = Object.keys(state.answers).length;
    const blankCount = EXAM_META.totalQuestions - answeredCount;
    const flaggedCount = Object.values(state.flagged).filter(Boolean).length;

    els.statAnswered.textContent = answeredCount;
    els.statBlank.textContent = blankCount;
    els.statFlagged.textContent = flaggedCount;
    els.topProgressBar.style.width = `${(answeredCount / EXAM_META.totalQuestions) * 100}%`;

    // Mostrar/ocultar filtros de correção
    els.pillWrong.classList.toggle("hidden", !state.graded);
    els.pillCorrect.classList.toggle("hidden", !state.graded);

    // Banner de resultado
    if (state.graded) {
      const stats = computeGradeStats();
      els.gradedBanner.classList.remove("hidden");
      els.gradedBannerStats.innerHTML = `
        <div class="graded-pill">
          <strong style="color:var(--success);">${stats.correct}/${stats.totalKeyed}</strong>
          <span>Acertos</span>
        </div>
        <div class="graded-pill">
          <strong style="color:var(--danger);">${stats.wrong}</strong>
          <span>Erros</span>
        </div>
        <div class="graded-pill">
          <strong style="color:var(--accent-gold);">${stats.blank}</strong>
          <span>Em branco</span>
        </div>
        <div class="graded-pill">
          <strong>${stats.percent.toFixed(1)}%</strong>
          <span>Aproveitamento</span>
        </div>
      `;
    } else {
      els.gradedBanner.classList.add("hidden");
    }

    // Grade de questões
    els.questionGrid.innerHTML = "";
    QUESTIONS.forEach(q => {
      const n = q.number;
      if (filterDiscipline !== "all" && q.disciplineId !== filterDiscipline) return;

      const ans = state.answers[n];
      const flag = !!state.flagged[n];
      const gradeRes = isQuestionCorrect(n);

      if (filterStatus === "answered" && !ans) return;
      if (filterStatus === "unanswered" && ans) return;
      if (filterStatus === "flagged" && !flag) return;
      if (filterStatus === "wrong" && gradeRes !== "wrong" && gradeRes !== "blank") return;
      if (filterStatus === "correct" && gradeRes !== "correct") return;

      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "q-cell";
      if (ans) cell.classList.add("answered");
      if (flag) cell.classList.add("flagged");
      if (n === state.currentQuestion) cell.classList.add("current");
      if (gradeRes === "correct") cell.classList.add("graded-correct");
      if (gradeRes === "wrong") cell.classList.add("graded-wrong");

      cell.innerHTML = `<span>${pad2(n)}</span>${ans ? `<span class="cell-ans">${ans}</span>` : ""}`;
      cell.title = `Questão ${n} — ${getDisciplineById(q.disciplineId).short}${ans ? ` (${ans})` : " (em branco)"}`;
      cell.addEventListener("click", () => goToQuestion(n));
      els.questionGrid.appendChild(cell);
    });
  }

  function renderAll() {
    applyTheme();
    renderStudyModeBtn();
    renderTimer();
    renderQuestion();
    renderSidebarAndProgress();
  }

  // =========================================================================
  // Ações de Resolução
  // =========================================================================
  function goToQuestion(num) {
    const clamped = Math.max(1, Math.min(EXAM_META.totalQuestions, num));
    state.currentQuestion = clamped;
    saveState();
    renderQuestion();
    renderSidebarAndProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectOption(num, letter) {
    if (state.graded) {
      showToast("Simulado já corrigido. Clique em 'Desfazer Correção' para editar respostas.");
      return;
    }
    state.answers[num] = letter;
    // Se estava riscada, remove o risco automaticamente ao selecionar
    if (state.eliminated[num]) {
      state.eliminated[num] = state.eliminated[num].filter(l => l !== letter);
    }
    // Inicia cronômetro automaticamente na primeira resposta se ainda estiver cheio
    if (!state.timerRunning && state.remainingSeconds === EXAM_META.durationSeconds) {
      startTimer();
    }
    saveState();
    renderQuestion();
    renderSidebarAndProgress();
  }

  function clearCurrentAnswer() {
    if (state.graded) return;
    delete state.answers[state.currentQuestion];
    saveState();
    renderQuestion();
    renderSidebarAndProgress();
  }

  function toggleFlag(num) {
    state.flagged[num] = !state.flagged[num];
    if (!state.flagged[num]) delete state.flagged[num];
    saveState();
    renderQuestion();
    renderSidebarAndProgress();
  }

  function toggleEliminate(num, letter) {
    const list = state.eliminated[num] ? [...state.eliminated[num]] : [];
    const idx = list.indexOf(letter);
    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(letter);
    }
    state.eliminated[num] = list;
    saveState();
    renderQuestion();
  }

  function goToNextUnanswered() {
    for (let i = state.currentQuestion + 1; i <= EXAM_META.totalQuestions; i++) {
      if (!state.answers[i]) {
        goToQuestion(i);
        return;
      }
    }
    for (let i = 1; i < state.currentQuestion; i++) {
      if (!state.answers[i]) {
        goToQuestion(i);
        return;
      }
    }
    showToast("🎉 Todas as 100 questões já estão respondidas!");
  }

  // =========================================================================
  // Folha de Respostas
  // =========================================================================
  function renderBubbleSheet() {
    els.bubbleSheetContainer.innerHTML = "";
    for (let col = 0; col < 5; col++) {
      const colDiv = document.createElement("div");
      colDiv.className = "bubble-col";
      for (let row = 1; row <= 20; row++) {
        const qNum = col * 20 + row;
        const userAns = state.answers[qNum];
        const keyAns = state.graded ? state.answerKey[qNum] : null;

        const rowDiv = document.createElement("div");
        rowDiv.className = "bubble-row";
        rowDiv.innerHTML = `<span class="bubble-num">${qNum}.</span>` + LETTERS.map(l => {
          let cls = "bubble-dot";
          if (state.graded && keyAns) {
            if (userAns === l && userAns === keyAns) cls += " correct";
            else if (userAns === l && userAns !== keyAns) cls += " wrong";
            else if (l === keyAns) cls += " expected";
          } else if (userAns === l) {
            cls += " filled";
          }
          return `<span class="${cls}">${l}</span>`;
        }).join("");

        rowDiv.addEventListener("click", () => {
          closeModal("sheetModal");
          goToQuestion(qNum);
        });
        colDiv.appendChild(rowDiv);
      }
      els.bubbleSheetContainer.appendChild(colDiv);
    }
  }

  // =========================================================================
  // Parser e Correção de Gabarito
  // =========================================================================
  function parseGabaritoText(rawText) {
    const result = {};
    const cleaned = rawText.trim();
    if (!cleaned) return result;

    // 1. Tenta JSON
    if (cleaned.startsWith("{")) {
      try {
        const obj = JSON.parse(cleaned);
        Object.entries(obj).forEach(([k, v]) => {
          const n = parseInt(k, 10);
          const l = String(v).trim().toUpperCase();
          if (n >= 1 && n <= 100 && LETTERS.includes(l)) result[n] = l;
        });
        if (Object.keys(result).length > 0) return result;
      } catch { /* fallback */ }
    }

    // 2. Tenta pares explícitos "1-A", "01. B", "1: C", "1) D", "1 E"
    const pairRegex = /\b(\d{1,3})\s*(?:[-.:)\s/]+)\s*([A-Ea-e])\b/g;
    let match;
    while ((match = pairRegex.exec(cleaned)) !== null) {
      const n = parseInt(match[1], 10);
      const l = match[2].toUpperCase();
      if (n >= 1 && n <= 100 && LETTERS.includes(l)) {
        result[n] = l;
      }
    }
    if (Object.keys(result).length >= 5) return result;

    // 3. Fallback: sequência pura de letras A–E (ex: "A C E B D ...")
    const onlyLetters = cleaned.toUpperCase().match(/\b[A-E]\b/g) || cleaned.toUpperCase().replace(/[^A-E]/g, "").split("");
    onlyLetters.slice(0, 100).forEach((l, idx) => {
      if (LETTERS.includes(l)) result[idx + 1] = l;
    });
    return result;
  }

  function formatKeyAsText(keyObj) {
    return Object.keys(keyObj)
      .map(Number)
      .sort((a, b) => a - b)
      .map(n => `${pad2(n)}-${keyObj[n]}`)
      .join("  ");
  }

  function computeGradeStats() {
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    let totalKeyed = 0;

    const byDiscipline = DISCIPLINES.map(d => ({
      ...d,
      total: 0,
      correct: 0,
      wrong: 0,
      blank: 0
    }));
    const discMap = Object.fromEntries(byDiscipline.map(d => [d.id, d]));

    QUESTIONS.forEach(q => {
      const key = state.answerKey[q.number];
      if (!key) return;
      totalKeyed++;
      const d = discMap[q.disciplineId];
      d.total++;
      const user = state.answers[q.number];
      if (!user) {
        blank++;
        d.blank++;
      } else if (user === key) {
        correct++;
        d.correct++;
      } else {
        wrong++;
        d.wrong++;
      }
    });

    const percent = totalKeyed ? (correct / totalKeyed) * 100 : 0;
    return { correct, wrong, blank, totalKeyed, percent, byDiscipline };
  }

  function renderReportModal() {
    const stats = computeGradeStats();
    const elapsedSec = EXAM_META.durationSeconds - state.remainingSeconds;

    els.reportSummaryGrid.innerHTML = `
      <div class="report-kpi">
        <strong style="color:var(--success);">${stats.correct}</strong>
        <span>Acertos (de ${stats.totalKeyed})</span>
      </div>
      <div class="report-kpi">
        <strong style="color:var(--danger);">${stats.wrong}</strong>
        <span>Erros</span>
      </div>
      <div class="report-kpi">
        <strong style="color:var(--primary);">${stats.percent.toFixed(1)}%</strong>
        <span>Aproveitamento</span>
      </div>
      <div class="report-kpi">
        <strong>${formatTime(elapsedSec)}</strong>
        <span>Tempo utilizado</span>
      </div>
    `;

    els.disciplineReportList.innerHTML = stats.byDiscipline
      .filter(d => d.total > 0)
      .map(d => {
        const pct = (d.correct / d.total) * 100;
        const barColor = pct >= 75 ? "var(--success)" : pct >= 50 ? "var(--accent-gold)" : "var(--danger)";
        return `
          <div class="disc-row">
            <div class="disc-row-top">
              <span>${d.name} <small style="color:var(--text-muted); font-weight:500;">(Q${d.range[0]}–${d.range[1]})</small></span>
              <span style="font-family:'JetBrains Mono', monospace;">
                ${d.correct}/${d.total} (${pct.toFixed(0)}%)
              </span>
            </div>
            <div class="disc-bar-bg">
              <div class="disc-bar-fill" style="width:${pct}%; background:${barColor};"></div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  // =========================================================================
  // Modais
  // =========================================================================
  function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
  }

  function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
  }

  // =========================================================================
  // Event Listeners
  // =========================================================================
  function bindEvents() {
    // Timer
    els.toggleTimerBtn.addEventListener("click", () => {
      if (state.timerRunning) pauseTimer();
      else startTimer();
    });

    els.resetTimerBtn.addEventListener("click", () => {
      if (confirm("Reiniciar o cronômetro para 04:00:00?")) {
        pauseTimer();
        state.remainingSeconds = EXAM_META.durationSeconds;
        saveState();
        renderTimer();
      }
    });

    // Modo Estudo vs Modo Prova
    els.studyModeBtn.addEventListener("click", () => {
      state.studyMode = !state.studyMode;
      saveState();
      renderAll();
      showToast(
        state.studyMode
          ? "📚 Modo Estudo ativado: o gabarito comentado aparece logo após responder cada questão."
          : "🎯 Modo Prova ativado: gabarito oculto até você finalizar o simulado."
      );
    });

    // Tema
    els.themeToggleBtn.addEventListener("click", () => {
      state.lightTheme = !state.lightTheme;
      saveState();
      applyTheme();
    });

    // Texto de Apoio toggle
    els.supportTextToggle.addEventListener("click", () => {
      state.supportTextCollapsed = !state.supportTextCollapsed;
      saveState();
      renderSupportText(getQuestion(state.currentQuestion));
    });

    // Ações da questão
    els.flagBtn.addEventListener("click", () => toggleFlag(state.currentQuestion));
    els.clearAnswerBtn.addEventListener("click", clearCurrentAnswer);

    els.notesToggleBtn.addEventListener("click", () => {
      const hidden = els.notesTextarea.classList.toggle("hidden");
      els.notesToggleLabel.textContent = hidden
        ? "Abrir rascunho / anotação desta questão"
        : "Ocultar rascunho / anotação";
      if (!hidden) els.notesTextarea.focus();
    });

    els.notesTextarea.addEventListener("input", () => {
      const val = els.notesTextarea.value;
      if (val.trim()) state.notes[state.currentQuestion] = val;
      else delete state.notes[state.currentQuestion];
      saveState();
    });

    // Navegação
    els.prevBtn.addEventListener("click", () => goToQuestion(state.currentQuestion - 1));
    els.nextBtn.addEventListener("click", () => {
      if (state.currentQuestion >= EXAM_META.totalQuestions) {
        renderBubbleSheet();
        openModal("sheetModal");
      } else {
        goToQuestion(state.currentQuestion + 1);
      }
    });
    els.nextUnansweredBtn.addEventListener("click", goToNextUnanswered);

    // Filtros sidebar
    els.disciplineFilter.addEventListener("change", e => {
      filterDiscipline = e.target.value;
      renderSidebarAndProgress();
      if (filterDiscipline !== "all") {
        const disc = getDisciplineById(filterDiscipline);
        if (disc.range) goToQuestion(disc.range[0]);
      }
    });

    els.statusFilterPills.addEventListener("click", e => {
      const pill = e.target.closest(".filter-pill");
      if (!pill) return;
      filterStatus = pill.dataset.filter;
      els.statusFilterPills.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderSidebarAndProgress();
    });

    // Modal Folha de Respostas
    els.openSheetBtn.addEventListener("click", () => {
      renderBubbleSheet();
      openModal("sheetModal");
    });

    els.copyAnswersBtn.addEventListener("click", () => {
      const lines = [];
      for (let i = 1; i <= EXAM_META.totalQuestions; i++) {
        lines.push(`${pad2(i)}-${state.answers[i] || "_"}`);
      }
      navigator.clipboard.writeText(lines.join("  ")).then(() => {
        showToast("📋 Suas respostas foram copiadas!");
      });
    });

    // Modal Gabarito
    els.openGabaritoBtn.addEventListener("click", () => {
      const answeredCount = Object.keys(state.answers).length;
      const blankCount = EXAM_META.totalQuestions - answeredCount;
      const keyCount = Object.keys(state.answerKey).length;
      els.gabaritoSummaryInfo.innerHTML = `
        <strong>Gabarito Oficial Comentado (${keyCount} questões) pronto para correção!</strong><br>
        Você respondeu <strong>${answeredCount}</strong> de <strong>${EXAM_META.totalQuestions}</strong> questões
        (${blankCount > 0 ? `${blankCount} em branco` : "nenhuma em branco"}).
        Ao corrigir, o cronômetro pausa e você verá sua nota geral, desempenho por disciplina e o comentário oficial de todas as questões.
      `;
      els.gabaritoInput.value = "";
      els.gabaritoParseStatus.textContent = "";
      openModal("gabaritoModal");
    });

    els.gabaritoInput.addEventListener("input", updateGabaritoPreview);

    els.applyGabaritoBtn.addEventListener("click", () => {
      const customText = els.gabaritoInput.value.trim();
      let activeKey = state.answerKey;
      if (customText) {
        const parsed = parseGabaritoText(customText);
        if (Object.keys(parsed).length === 0) {
          showToast("Nenhuma resposta válida reconhecida no texto colado.");
          return;
        }
        activeKey = parsed;
      }
      const count = Object.keys(activeKey).length;
      if (count === 0) {
        showToast("Nenhum gabarito carregado.");
        return;
      }
      state.answerKey = activeKey;
      state.graded = true;
      pauseTimer();
      saveState();
      closeModal("gabaritoModal");
      renderAll();
      renderReportModal();
      openModal("reportModal");
      showToast(`✅ Simulado corrigido com ${count} questões comentadas!`);
    });

    // Banner de resultado
    els.openReportBtn.addEventListener("click", () => {
      renderReportModal();
      openModal("reportModal");
    });

    els.filterErrorsQuickBtn.addEventListener("click", () => {
      filterStatus = "wrong";
      els.statusFilterPills.querySelectorAll(".filter-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.filter === "wrong");
      });
      renderSidebarAndProgress();
      const firstErr = QUESTIONS.find(q => {
        const r = isQuestionCorrect(q.number);
        return r === "wrong" || r === "blank";
      });
      if (firstErr) goToQuestion(firstErr.number);
      else showToast("🎉 Parabéns! Nenhum erro encontrado!");
    });

    els.clearGradeBtn.addEventListener("click", () => {
      state.graded = false;
      if (filterStatus === "wrong" || filterStatus === "correct") {
        filterStatus = "all";
        els.statusFilterPills.querySelectorAll(".filter-pill").forEach(p => {
          p.classList.toggle("active", p.dataset.filter === "all");
        });
      }
      saveState();
      renderAll();
      showToast("Modo de correção desativado. Você pode continuar editando.");
    });

    els.copyReportBtn.addEventListener("click", () => {
      const stats = computeGradeStats();
      const lines = [
        `📊 PC-BA Simulado 01 — Resultado: ${stats.correct}/${stats.totalKeyed} (${stats.percent.toFixed(1)}%)`,
        `Acertos: ${stats.correct} | Erros: ${stats.wrong} | Em branco: ${stats.blank}`,
        "",
        ...stats.byDiscipline
          .filter(d => d.total > 0)
          .map(d => `- ${d.name}: ${d.correct}/${d.total} (${((d.correct / d.total) * 100).toFixed(0)}%)`)
      ];
      navigator.clipboard.writeText(lines.join("\n")).then(() => {
        showToast("📋 Resumo copiado para a área de transferência!");
      });
    });

    // Backup / Restaurar / Reset
    els.exportBackupBtn.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `pcba-simulado-01-backup.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("💾 Backup baixado com sucesso!");
    });

    els.importBackupInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const imported = JSON.parse(ev.target.result);
          state = { ...defaultState(), ...imported, timerRunning: false };
          saveState();
          renderAll();
          showToast("📥 Backup restaurado com sucesso!");
        } catch {
          showToast("Erro ao ler o arquivo de backup.");
        }
      };
      reader.readAsText(file);
      e.target.value = "";
    });

    els.resetAllBtn.addEventListener("click", () => {
      if (confirm("Deseja realmente zerar TODAS as respostas, marcações e o cronômetro deste simulado?")) {
        pauseTimer();
        const savedKey = state.answerKey;
        state = defaultState();
        state.answerKey = savedKey;
        saveState();
        renderAll();
        showToast("↺ Simulado reiniciado.");
      }
    });

    // Fechar modais
    document.querySelectorAll("[data-close]").forEach(btn => {
      btn.addEventListener("click", () => closeModal(btn.dataset.close));
    });
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", e => {
        if (e.target === overlay) overlay.classList.add("hidden");
      });
    });

    // Atalhos de teclado
    document.addEventListener("keydown", e => {
      // Ignora quando estiver digitando em textarea/input/select
      const tag = (e.target.tagName || "").toUpperCase();
      if (tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT") return;
      // Ignora se algum modal estiver aberto
      if (!els.sheetModal.classList.contains("hidden") ||
          !els.gabaritoModal.classList.contains("hidden") ||
          !els.reportModal.classList.contains("hidden")) {
        if (e.key === "Escape") {
          closeModal("sheetModal");
          closeModal("gabaritoModal");
          closeModal("reportModal");
        }
        return;
      }

      const key = e.key.toUpperCase();
      if (LETTERS.includes(key)) {
        selectOption(state.currentQuestion, key);
      } else if (e.key === "ArrowRight") {
        if (state.currentQuestion < EXAM_META.totalQuestions) goToQuestion(state.currentQuestion + 1);
      } else if (e.key === "ArrowLeft") {
        if (state.currentQuestion > 1) goToQuestion(state.currentQuestion - 1);
      } else if (key === "M") {
        toggleFlag(state.currentQuestion);
      }
    });
  }

  function updateGabaritoPreview() {
    const parsed = parseGabaritoText(els.gabaritoInput.value);
    const count = Object.keys(parsed).length;
    if (count === 0) {
      els.gabaritoParseStatus.textContent = "Aguardando gabarito...";
      els.gabaritoParseStatus.style.color = "var(--text-muted)";
    } else if (count === 100) {
      els.gabaritoParseStatus.textContent = `✓ 100 de 100 questões reconhecidas! Pronto para corrigir.`;
      els.gabaritoParseStatus.style.color = "var(--success)";
    } else {
      els.gabaritoParseStatus.textContent = `${count} de 100 questões reconhecidas (você já pode corrigir parcialmente ou completar as 100).`;
      els.gabaritoParseStatus.style.color = "var(--accent-gold)";
    }
  }

  // Inicialização
  populateDisciplineSelect();
  bindEvents();
  renderAll();
})();
