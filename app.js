/* ========================================
   Quizlet — Application Logic (Multi-Subject & Exam Simulation)
   ======================================== */

(function () {
  'use strict';

  // ---- Subjects Configuration ----
  const SUBJECTS = {
    MLN111: {
      code: 'MLN111',
      name: 'Triết học Mác - Lênin',
      shortName: 'Triết học',
      getQuestions: () => (typeof QUESTIONS !== 'undefined' ? QUESTIONS : []),
      storageKey: 'mln111_quizlet_progress_v2',
      mockStorageKey: 'mln111_mock_exam_progress_v2',
      questionsPerExam: 50,
    },
    MLN122: {
      code: 'MLN122',
      name: 'Kinh tế chính trị Mác - Lênin',
      shortName: 'Kinh tế chính trị',
      getQuestions: () => (typeof MLN122_QUESTIONS !== 'undefined' ? MLN122_QUESTIONS : []),
      storageKey: 'mln122_quizlet_progress_v2',
      mockStorageKey: 'mln122_mock_exam_progress_v2',
      questionsPerExam: 50,
    }
  };

  // Migrate old storage if exists
  try {
    const old = localStorage.getItem('mln111_quizlet_progress');
    if (old && !localStorage.getItem(SUBJECTS.MLN111.storageKey)) {
      localStorage.setItem(SUBJECTS.MLN111.storageKey, old);
    }
  } catch (e) {}

  // ---- State ----
  let state = {
    currentSubject: null,    // null | 'MLN111' | 'MLN122'
    currentView: 'subjects', // 'subjects' | 'home' | 'quiz' | 'result'
    activeTab: 'exams',       // 'exams' | 'mock'
    currentExam: null,       // number (1-12) or 'MOCK'
    currentMockId: null,     // string id of current mock exam
    isMockExam: false,
    currentIndex: 0,
    quizQuestions: [],
    answers: {},
    selectedMulti: [],
    isFlipped: false,
    isAnswered: false,
    reviewMode: null,        // null | 'wrong' | 'correct' | 'all'
  };

  // ---- DOM Cache ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const dom = {
    btnBack: $('#btn-back'),
    btnBackText: $('#btn-back-text'),
    logoHome: $('#logo-home'),
    btnSwitchSubject: $('#btn-switch-subject'),
    headerStats: $('#header-stats'),

    viewSubjects: $('#view-subjects'),
    viewHome: $('#view-home'),
    viewQuiz: $('#view-quiz'),
    viewResult: $('#view-result'),

    mln111ProgressFill: $('#mln111-progress-fill'),
    mln111ProgressLabel: $('#mln111-progress-label'),
    mln122ProgressFill: $('#mln122-progress-fill'),
    mln122ProgressLabel: $('#mln122-progress-label'),

    dashboardSubjectCode: $('#dashboard-subject-code'),
    dashboardSubjectName: $('#dashboard-subject-name'),
    dashboardSubjectStats: $('#dashboard-subject-stats'),

    tabBtnExams: $('#tab-btn-exams'),
    tabBtnMock: $('#tab-btn-mock'),
    tabExamCount: $('#tab-exam-count'),
    tabMockCount: $('#tab-mock-count'),
    tabContentExams: $('#tab-content-exams'),
    tabContentMock: $('#tab-content-mock'),

    btnMockStart: $('#btn-mock-start'),
    mockHistoryHeader: $('#mock-history-header'),
    mockHistoryCount: $('#mock-history-count'),
    mockHistoryGrid: $('#mock-history-grid'),

    examGrid: $('#exam-grid'),

    btnQuizBack: $('#btn-quiz-back'),
    quizModeTag: $('#quiz-mode-tag'),
    quizTitle: $('#quiz-title'),
    quizCounter: $('#quiz-counter'),
    progressFill: $('#progress-fill'),
    flashcard: $('#flashcard'),
    cardFront: $('#card-front'),
    cardBack: $('#card-back'),
    questionBadge: $('#question-badge'),
    questionText: $('#question-text'),
    optionsList: $('#options-list'),
    multiConfirmWrapper: $('#multi-confirm-wrapper'),
    btnConfirmMulti: $('#btn-confirm-multi'),
    multiCount: $('#multi-count'),
    resultStatusBadge: $('#result-status-badge'),
    questionTextBack: $('#question-text-back'),
    answerReview: $('#answer-review'),
    noteBox: $('#note-box'),
    btnNext: $('#btn-next'),

    resultTypeTag: $('#result-type-tag'),
    resultTitle: $('#result-title'),
    resultSubtitle: $('#result-subtitle'),
    scoreFill: $('#score-fill'),
    scoreNum: $('#score-num'),
    scoreTotal: $('#score-total'),
    resultStats: $('#result-stats'),
    btnReviewWrong: $('#btn-review-wrong'),
    btnReviewWrongText: $('#btn-review-wrong-text'),
    btnReviewCorrect: $('#btn-review-correct'),
    btnReviewCorrectText: $('#btn-review-correct-text'),
    btnRestart: $('#btn-restart'),
    btnRestartText: $('#btn-restart-text'),
    btnNewMock: $('#btn-new-mock'),
    btnResultHome: $('#btn-result-home'),
    reviewList: $('#review-list'),
  };

  // ---- Helper: Get Current Subject Info ----
  function getSubConfig() {
    return SUBJECTS[state.currentSubject] || SUBJECTS.MLN111;
  }

  function getSubjectQuestions(subCode = state.currentSubject) {
    const sub = SUBJECTS[subCode];
    return sub ? sub.getQuestions() : [];
  }

  function getSubjectExamCount(subCode = state.currentSubject) {
    const sub = SUBJECTS[subCode];
    if (!sub) return 0;
    const totalQ = sub.getQuestions().length;
    return Math.ceil(totalQ / sub.questionsPerExam);
  }

  function getSubjectExamQuestions(subCode, examNum) {
    const sub = SUBJECTS[subCode];
    if (!sub) return [];
    const all = sub.getQuestions();
    const start = (examNum - 1) * sub.questionsPerExam;
    const end = Math.min(start + sub.questionsPerExam, all.length);
    return all.slice(start, end);
  }

  // ---- Persistence ----
  function loadSubjectProgress(subCode = state.currentSubject) {
    const sub = SUBJECTS[subCode];
    if (!sub) return {};
    try {
      const data = localStorage.getItem(sub.storageKey);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  function saveExamResult(examNum, answers, isCompleted = false) {
    if (!state.currentSubject || !examNum) return;

    if (state.isMockExam) {
      saveMockExamResult(answers, isCompleted);
      return;
    }

    const sub = getSubConfig();
    const progress = loadSubjectProgress();
    const questions = getSubjectExamQuestions(state.currentSubject, examNum);
    const total = questions.length;

    let correctCount = 0;
    Object.keys(answers).forEach((qid) => {
      if (answers[qid] && answers[qid].correct) {
        correctCount++;
      }
    });

    if (!progress[examNum]) {
      progress[examNum] = { attempts: 0, bestScore: 0, lastScore: 0 };
    }

    if (isCompleted) {
      progress[examNum].attempts = (progress[examNum].attempts || 0) + 1;
      progress[examNum].completed = true;
    }

    progress[examNum].lastScore = correctCount;
    if (correctCount > (progress[examNum].bestScore || 0)) {
      progress[examNum].bestScore = correctCount;
    }
    progress[examNum].total = total;
    progress[examNum].answers = answers;
    progress[examNum].updatedAt = Date.now();

    localStorage.setItem(sub.storageKey, JSON.stringify(progress));
    updateHeaderStats();
    updateSubjectProgressCards();
  }

  // Mock Exam Persistence (Array of mock tests per subject)
  function loadMockExams(subCode = state.currentSubject) {
    const sub = SUBJECTS[subCode];
    if (!sub) return [];
    try {
      const raw = localStorage.getItem(sub.mockStorageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
      // Backward compatibility with single-object schema
      if (parsed && parsed.questions && parsed.questions.length > 0) {
        const legacyMock = {
          id: 'mock_legacy_' + (parsed.updatedAt || Date.now()),
          examNumber: 1,
          title: 'Đề thi thử #1',
          createdAt: parsed.updatedAt || Date.now(),
          updatedAt: parsed.updatedAt || Date.now(),
          questions: parsed.questions,
          answers: parsed.answers || {},
          lastScore: parsed.lastScore !== undefined ? parsed.lastScore : 0,
          total: parsed.total || parsed.questions.length,
          isCompleted: !!parsed.isCompleted,
        };
        const migrated = [legacyMock];
        localStorage.setItem(sub.mockStorageKey, JSON.stringify(migrated));
        return migrated;
      }
      return [];
    } catch {
      return [];
    }
  }

  function saveMockExams(mocks, subCode = state.currentSubject) {
    const sub = SUBJECTS[subCode];
    if (!sub) return;
    try {
      localStorage.setItem(sub.mockStorageKey, JSON.stringify(mocks));
    } catch (e) {
      console.error('Failed to save mock exams:', e);
    }
  }

  function getMockExamById(mockId, subCode = state.currentSubject) {
    const mocks = loadMockExams(subCode);
    return mocks.find(m => m.id === mockId) || null;
  }

  function saveMockExamResult(answers, isCompleted = false) {
    const sub = getSubConfig();
    const mocks = loadMockExams(sub.code);
    const mockId = state.currentMockId;

    let correctCount = 0;
    Object.keys(answers).forEach((qid) => {
      if (answers[qid] && answers[qid].correct) {
        correctCount++;
      }
    });

    const existingIdx = mocks.findIndex(m => m.id === mockId);
    if (existingIdx >= 0) {
      mocks[existingIdx].answers = answers;
      mocks[existingIdx].lastScore = correctCount;
      mocks[existingIdx].total = state.quizQuestions.length;
      mocks[existingIdx].updatedAt = Date.now();
      if (isCompleted) {
        mocks[existingIdx].isCompleted = true;
      }
    } else {
      const nextNum = mocks.length + 1;
      const newMock = {
        id: mockId || ('mock_' + Date.now()),
        examNumber: nextNum,
        title: `Đề thi thử #${nextNum}`,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        questions: state.quizQuestions,
        answers: answers,
        lastScore: correctCount,
        total: state.quizQuestions.length,
        isCompleted: isCompleted,
      };
      state.currentMockId = newMock.id;
      mocks.unshift(newMock);
    }

    saveMockExams(mocks, sub.code);
  }

  function formatDate(timestamp) {
    if (!timestamp) return '';
    const d = new Date(timestamp);
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${hours}:${mins} ${day}/${month}`;
  }

  // ---- Utility ----
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function isMultiAnswerQuestion(q) {
    return !!(q.multiAnswer || (Array.isArray(q.answer) && q.answer.length > 1));
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---- Navigation ----
  function showView(viewName) {
    state.currentView = viewName;
    dom.viewSubjects.classList.toggle('active', viewName === 'subjects');
    dom.viewHome.classList.toggle('active', viewName === 'home');
    dom.viewQuiz.classList.toggle('active', viewName === 'quiz');
    dom.viewResult.classList.toggle('active', viewName === 'result');

    // Header buttons control
    if (viewName === 'subjects') {
      dom.btnBack.classList.add('hidden');
      dom.btnSwitchSubject.classList.add('hidden');
    } else if (viewName === 'home') {
      dom.btnBack.classList.remove('hidden');
      dom.btnBackText.textContent = 'Chọn môn';
      dom.btnSwitchSubject.classList.remove('hidden');
    } else {
      // quiz or result
      dom.btnBack.classList.remove('hidden');
      dom.btnBackText.textContent = 'Danh sách đề';
      dom.btnSwitchSubject.classList.remove('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToSubjects() {
    state.currentExam = null;
    state.isMockExam = false;
    state.reviewMode = null;
    showView('subjects');
    updateSubjectProgressCards();
  }

  function goToDashboard() {
    if (state.currentView === 'quiz' && state.currentExam && (!state.reviewMode || state.reviewMode === 'all')) {
      if (Object.keys(state.answers).length > 0) {
        saveExamResult(state.currentExam, state.answers, false);
      }
    }
    const wasMock = state.isMockExam;
    state.currentExam = null;
    state.isMockExam = false;
    state.reviewMode = null;
    if (wasMock) {
      state.activeTab = 'mock';
    }
    showView('home');
    renderSubjectDashboard();
  }

  function switchTab(tabName) {
    state.activeTab = tabName;
    if (dom.tabBtnExams) dom.tabBtnExams.classList.toggle('active', tabName === 'exams');
    if (dom.tabBtnMock) dom.tabBtnMock.classList.toggle('active', tabName === 'mock');
    if (dom.tabContentExams) dom.tabContentExams.classList.toggle('active', tabName === 'exams');
    if (dom.tabContentMock) dom.tabContentMock.classList.toggle('active', tabName === 'mock');
  }

  // ---- Subject Selection (Screen 1) ----
  function selectSubject(subCode) {
    if (!SUBJECTS[subCode]) return;
    state.currentSubject = subCode;
    state.activeTab = 'exams';
    try {
      localStorage.setItem('quizlet_last_subject', subCode);
    } catch {}
    goToDashboard();
  }

  function updateSubjectProgressCards() {
    // MLN111
    const p111 = loadSubjectProgress('MLN111');
    const total111Exams = getSubjectExamCount('MLN111');
    const completed111 = Object.values(p111).filter(p => p.answers && Object.keys(p.answers).length > 0).length;
    const pct111 = Math.round((completed111 / total111Exams) * 100);
    dom.mln111ProgressFill.style.width = `${pct111}%`;
    dom.mln111ProgressLabel.innerHTML = completed111 > 0 ?
      `<span>Đã học ${completed111}/${total111Exams} bộ đề</span><span>${pct111}%</span>` :
      `<span>Chưa làm bài nào</span><span>0%</span>`;

    // MLN122
    const p122 = loadSubjectProgress('MLN122');
    const total122Exams = getSubjectExamCount('MLN122');
    const completed122 = Object.values(p122).filter(p => p.answers && Object.keys(p.answers).length > 0).length;
    const pct122 = Math.round((completed122 / total122Exams) * 100);
    dom.mln122ProgressFill.style.width = `${pct122}%`;
    dom.mln122ProgressLabel.innerHTML = completed122 > 0 ?
      `<span>Đã học ${completed122}/${total122Exams} bộ đề</span><span>${pct122}%</span>` :
      `<span>Chưa làm bài nào</span><span>0%</span>`;
  }

  // ---- Subject Dashboard (Screen 2) ----
  function renderSubjectDashboard() {
    const sub = getSubConfig();
    const allQuestions = sub.getQuestions();
    const totalExams = getSubjectExamCount();
    const mocks = loadMockExams(sub.code);

    // Dashboard title
    dom.dashboardSubjectCode.textContent = sub.code;
    dom.dashboardSubjectName.textContent = sub.name;
    dom.dashboardSubjectStats.textContent = `${allQuestions.length} câu hỏi • ${totalExams} bộ đề ôn tập`;

    // Tab counts
    if (dom.tabExamCount) dom.tabExamCount.textContent = totalExams;
    if (dom.tabMockCount) dom.tabMockCount.textContent = mocks.length;

    // Render contents of both tabs
    renderExamGrid();
    renderMockHistory(mocks);

    // Activate active tab
    switchTab(state.activeTab || 'exams');

    updateHeaderStats();
  }

  function renderMockHistory(mocks) {
    if (!mocks || mocks.length === 0) {
      if (dom.mockHistoryHeader) dom.mockHistoryHeader.style.display = 'none';
      if (dom.mockHistoryGrid) dom.mockHistoryGrid.innerHTML = '';
      return;
    }

    if (dom.mockHistoryHeader) dom.mockHistoryHeader.style.display = 'flex';
    if (dom.mockHistoryCount) dom.mockHistoryCount.textContent = `${mocks.length} đề`;

    let html = '';
    mocks.forEach((mock) => {
      const count = mock.questions ? mock.questions.length : 50;
      const score = mock.lastScore !== undefined ? mock.lastScore : 0;
      const pct = count > 0 ? Math.round((score / count) * 100) : 0;
      const isCompleted = !!mock.isCompleted;
      const answeredCount = mock.answers ? Object.keys(mock.answers).length : 0;
      const wrongCount = count - score;

      const cardClass = isCompleted ? 'exam-card is-completed mock-card' : 'exam-card mock-card';

      html += `
        <div class="${cardClass}" data-mock-id="${mock.id}" role="button" tabindex="0">
          <div class="exam-header-row">
            <div class="exam-number">#${mock.examNumber || 1}</div>
            <span class="exam-status-badge ${isCompleted ? 'completed' : 'in-progress'}">
              ${isCompleted ? `Đã hoàn thành (${score}/${count})` : `Đang làm (${answeredCount}/${count})`}
            </span>
          </div>
          <div class="exam-label">${escapeHtml(mock.title || `Đề thi thử #${mock.examNumber}`)}</div>
          <div class="exam-info">${count} câu hỏi • ${formatDate(mock.createdAt)}</div>

          <div class="exam-progress">
            <div class="exam-progress-bar">
              <div class="exam-progress-fill" style="width: ${pct}%"></div>
            </div>
            <div class="exam-progress-text">
              <span>${pct}% đúng</span>
              <span class="exam-best">Điểm: ${score}/${count}</span>
            </div>
          </div>

          <div class="mock-card-actions">
            <button class="btn-mock-action btn-mock-view" data-mock-id="${mock.id}" title="Xem lại kết quả">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span>Xem kết quả</span>
            </button>
            ${wrongCount > 0 && isCompleted ? `
            <button class="btn-mock-action btn-mock-wrong" data-mock-id="${mock.id}" title="Học lại câu sai">
              <span class="status-dot dot-wrong" style="width: 7px; height: 7px; display: inline-block; border-radius: 50%; background: var(--accent-red);"></span>
              <span>Ôn sai (${wrongCount})</span>
            </button>
            ` : ''}
            <button class="btn-mock-action btn-mock-redo" data-mock-id="${mock.id}" title="Làm lại đề này">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>Làm lại</span>
            </button>
            <button class="btn-mock-action btn-mock-delete" data-mock-id="${mock.id}" title="Xoá đề này">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </div>
      `;
    });

    if (dom.mockHistoryGrid) {
      dom.mockHistoryGrid.innerHTML = html;

      // Event listeners
      dom.mockHistoryGrid.querySelectorAll('.mock-card').forEach(card => {
        const mockId = card.dataset.mockId;
        card.addEventListener('click', (e) => {
          if (e.target.closest('.btn-mock-action')) return;
          showMockResultById(mockId);
        });
        card.addEventListener('keydown', (e) => {
          if (e.target.closest('.btn-mock-action')) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showMockResultById(mockId);
          }
        });
      });

      dom.mockHistoryGrid.querySelectorAll('.btn-mock-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          showMockResultById(btn.dataset.mockId);
        });
      });

      dom.mockHistoryGrid.querySelectorAll('.btn-mock-wrong').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          startMockReviewWrongById(btn.dataset.mockId);
        });
      });

      dom.mockHistoryGrid.querySelectorAll('.btn-mock-redo').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          restartMockById(btn.dataset.mockId);
        });
      });

      dom.mockHistoryGrid.querySelectorAll('.btn-mock-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteMockById(btn.dataset.mockId);
        });
      });
    }
  }

  function renderExamGrid() {
    const sub = getSubConfig();
    const totalExams = getSubjectExamCount();
    const progress = loadSubjectProgress();
    const allQuestions = sub.getQuestions();
    let html = '';

    for (let i = 1; i <= totalExams; i++) {
      const examQuestions = getSubjectExamQuestions(state.currentSubject, i);
      const count = examQuestions.length;
      const p = progress[i] || { attempts: 0, bestScore: 0, answers: {} };
      const hasAnswers = p.answers && Object.keys(p.answers).length > 0;
      const score = p.lastScore !== undefined ? p.lastScore : p.bestScore;
      const pct = hasAnswers ? Math.round((score / count) * 100) : 0;

      const cardClass = hasAnswers ? 'exam-card is-completed' : 'exam-card';
      const startNum = (i - 1) * sub.questionsPerExam + 1;
      const endNum = Math.min(i * sub.questionsPerExam, allQuestions.length);

      html += `
        <div class="${cardClass}" data-exam="${i}" role="button" tabindex="0">
          <div class="exam-header-row">
            <div class="exam-number">${String(i).padStart(2, '0')}</div>
            ${hasAnswers ? `<span class="exam-status-badge">Đã làm (${score}/${count})</span>` : ''}
          </div>
          <div class="exam-label">Bộ đề ${i}</div>
          <div class="exam-info">${count} câu hỏi • Câu ${startNum}–${endNum}</div>

          <div class="exam-progress">
            <div class="exam-progress-bar">
              <div class="exam-progress-fill" style="width: ${hasAnswers ? pct : 0}%"></div>
            </div>
            <div class="exam-progress-text">
              <span>${hasAnswers ? `${pct}% đúng` : 'Chưa làm'}</span>
              ${hasAnswers ? `<span class="exam-best">Điểm: ${score}/${count}</span>` : ''}
            </div>
          </div>

          ${hasAnswers ? `
            <div class="exam-card-actions">
              <button class="btn-card-action primary btn-action-view" data-exam="${i}">Xem kết quả</button>
              <button class="btn-card-action btn-action-restart" data-exam="${i}">Làm lại</button>
            </div>
          ` : ''}
        </div>
      `;
    }

    dom.examGrid.innerHTML = html;

    // Attach card handlers
    dom.examGrid.querySelectorAll('.exam-card').forEach(card => {
      const examNum = parseInt(card.dataset.exam);

      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-card-action')) return;
        const p = progress[examNum];
        const hasAnswers = p && p.answers && Object.keys(p.answers).length > 0;
        if (hasAnswers) {
          showSavedResults(examNum);
        } else {
          startExam(examNum, null, null, true);
        }
      });
    });

    dom.examGrid.querySelectorAll('.btn-action-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const examNum = parseInt(btn.dataset.exam);
        showSavedResults(examNum);
      });
    });

    dom.examGrid.querySelectorAll('.btn-action-restart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const examNum = parseInt(btn.dataset.exam);
        startExam(examNum, null, null, true);
      });
    });
  }

  function updateHeaderStats() {
    if (!state.currentSubject) {
      dom.headerStats.innerHTML = '';
      return;
    }
    const progress = loadSubjectProgress();
    const totalExams = getSubjectExamCount();
    const completed = Object.values(progress).filter(p => p.answers && Object.keys(p.answers).length > 0).length;
    dom.headerStats.innerHTML = `
      <span class="stat-badge">Tiến độ: ${completed}/${totalExams} đề</span>
    `;
  }

  // ---- Mock Exam Generation & Management ----
  function startMockExam() {
    const sub = getSubConfig();
    const all = sub.getQuestions();
    if (all.length === 0) {
      alert('Không có câu hỏi nào để tạo đề thi!');
      return;
    }

    // Pick 50 random distinct questions
    const shuffled = shuffle(all);
    const mockQuestions = shuffled.slice(0, Math.min(50, all.length));

    const mocks = loadMockExams(sub.code);
    const nextNum = mocks.length + 1;
    const mockId = 'mock_' + Date.now();

    const newMock = {
      id: mockId,
      examNumber: nextNum,
      title: `Đề thi thử #${nextNum}`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      questions: mockQuestions,
      answers: {},
      lastScore: 0,
      total: mockQuestions.length,
      isCompleted: false,
    };

    // Save immediately so it appears in history
    mocks.unshift(newMock);
    saveMockExams(mocks, sub.code);

    state.isMockExam = true;
    state.currentMockId = mockId;
    state.currentExam = 'MOCK';
    state.currentIndex = 0;
    state.quizQuestions = mockQuestions;
    state.answers = {};
    state.selectedMulti = [];
    state.reviewMode = null;

    dom.quizTitle.textContent = `${newMock.title} • 50 câu`;
    dom.quizModeTag.textContent = `Thi thử • ${sub.code}`;
    dom.quizModeTag.className = 'quiz-mode-tag visible';

    showView('quiz');
    renderQuestion();
  }

  function showMockResultById(mockId) {
    const mock = getMockExamById(mockId);
    if (!mock || !mock.questions) return;

    state.isMockExam = true;
    state.currentMockId = mock.id;
    state.currentExam = 'MOCK';
    state.quizQuestions = mock.questions;
    state.answers = mock.answers || {};
    state.reviewMode = null;

    showResults(false);
  }

  function startMockReviewWrongById(mockId) {
    const mock = getMockExamById(mockId);
    if (!mock || !mock.questions) return;

    const wrongQuestions = mock.questions.filter(q => {
      const a = mock.answers && mock.answers[q.id];
      return !a || !a.correct;
    });

    if (wrongQuestions.length === 0) {
      alert('Đề thi thử này bạn không có câu sai nào!');
      return;
    }

    state.isMockExam = true;
    state.currentMockId = mock.id;
    state.currentExam = 'MOCK';
    state.currentIndex = 0;
    state.quizQuestions = wrongQuestions;
    state.answers = mock.answers || {};
    state.selectedMulti = [];
    state.reviewMode = 'wrong';

    dom.quizTitle.textContent = `${mock.title} — Học lại ${wrongQuestions.length} câu sai`;
    dom.quizModeTag.textContent = `Học câu sai`;
    dom.quizModeTag.className = 'quiz-mode-tag visible';

    showView('quiz');
    renderQuestion();
  }

  function restartMockById(mockId) {
    const mock = getMockExamById(mockId);
    if (!mock || !mock.questions) return;

    state.isMockExam = true;
    state.currentMockId = mock.id;
    state.currentExam = 'MOCK';
    state.currentIndex = 0;
    state.quizQuestions = mock.questions;
    state.answers = {};
    state.selectedMulti = [];
    state.reviewMode = null;

    // Reset saved answers for this mock in localStorage
    const sub = getSubConfig();
    const mocks = loadMockExams(sub.code);
    const idx = mocks.findIndex(m => m.id === mockId);
    if (idx >= 0) {
      mocks[idx].answers = {};
      mocks[idx].lastScore = 0;
      mocks[idx].isCompleted = false;
      mocks[idx].updatedAt = Date.now();
      saveMockExams(mocks, sub.code);
    }

    dom.quizTitle.textContent = `${mock.title} • 50 câu`;
    dom.quizModeTag.textContent = `Thi thử • ${sub.code}`;
    dom.quizModeTag.className = 'quiz-mode-tag visible';

    showView('quiz');
    renderQuestion();
  }

  function deleteMockById(mockId) {
    const sub = getSubConfig();
    const mocks = loadMockExams(sub.code);
    const mock = mocks.find(m => m.id === mockId);
    const title = mock ? mock.title : 'đề thi thử này';
    if (!confirm(`Bạn có chắc muốn xoá ${title} khỏi danh sách đề đã thi không?`)) {
      return;
    }

    const filtered = mocks.filter(m => m.id !== mockId);
    saveMockExams(filtered, sub.code);
    renderSubjectDashboard();
  }

  // ---- Show Saved Results (Standard Exam) ----
  function showSavedResults(examNum) {
    const progress = loadSubjectProgress();
    const p = progress[examNum];
    if (!p || !p.answers || Object.keys(p.answers).length === 0) {
      startExam(examNum, null, null, true);
      return;
    }

    state.isMockExam = false;
    state.currentExam = examNum;
    state.quizQuestions = getSubjectExamQuestions(state.currentSubject, examNum);
    state.answers = { ...p.answers };
    state.reviewMode = null;

    showResults(false);
  }

  // ---- Start Standard Exam ----
  function startExam(examNum, mode = null, filterFn = null, isFresh = false) {
    state.isMockExam = false;
    state.currentExam = examNum;
    state.currentIndex = 0;
    state.isFlipped = false;
    state.isAnswered = false;
    state.selectedMulti = [];
    state.reviewMode = mode;

    const allExamQuestions = getSubjectExamQuestions(state.currentSubject, examNum);
    let questions = allExamQuestions;

    if (filterFn) {
      questions = allExamQuestions.filter(filterFn);
    }

    if (mode === 'all') {
      questions = shuffle(allExamQuestions);
    }

    state.quizQuestions = questions;

    if (isFresh) {
      state.answers = {};
    } else if (mode === 'wrong' || mode === 'correct') {
      const progress = loadSubjectProgress();
      if (progress[examNum] && progress[examNum].answers) {
        state.answers = { ...progress[examNum].answers };
      }
    }

    if (questions.length === 0) {
      alert('Không có câu hỏi nào để hiển thị!');
      return;
    }

    const sub = getSubConfig();
    let title = `${sub.code} — Bộ đề ${examNum}`;
    if (mode === 'wrong') {
      dom.quizModeTag.textContent = `Học lại ${questions.length} câu sai`;
      dom.quizModeTag.className = 'quiz-mode-tag visible';
    } else if (mode === 'correct') {
      dom.quizModeTag.textContent = `Ôn lại ${questions.length} câu đúng`;
      dom.quizModeTag.className = 'quiz-mode-tag visible';
    } else {
      dom.quizModeTag.textContent = `${questions.length} câu hỏi`;
      dom.quizModeTag.className = 'quiz-mode-tag visible';
    }

    dom.quizTitle.textContent = title;
    showView('quiz');
    renderQuestion();
  }

  // ---- Render: Question ----
  function renderQuestion() {
    const q = state.quizQuestions[state.currentIndex];
    if (!q) return;

    state.isFlipped = false;
    state.isAnswered = false;
    state.selectedMulti = [];
    dom.flashcard.classList.remove('flipped');
    dom.btnNext.classList.remove('visible');

    const total = state.quizQuestions.length;
    const current = state.currentIndex + 1;
    dom.quizCounter.textContent = `${current} / ${total}`;
    dom.progressFill.style.width = `${(current / total) * 100}%`;

    const multi = isMultiAnswerQuestion(q);

    let badgeText = `Câu ${q.id}`;
    if (multi) {
      badgeText += ' <span class="multi-answer-badge">Chọn nhiều đáp án</span>';
    }
    dom.questionBadge.innerHTML = badgeText;

    if (multi) {
      dom.questionText.innerHTML = `
        ${escapeHtml(q.question)}
        <div class="multi-hint">Câu hỏi này yêu cầu chọn nhiều đáp án. Hãy nhấp chọn các đáp án bạn cho là đúng, sau đó bấm Xác nhận bên dưới.</div>
      `;
    } else {
      dom.questionText.textContent = q.question;
    }

    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      const letter = opt.charAt(0);
      const text = opt.substring(3);
      optionsHtml += `
        <button class="option-btn" data-letter="${letter}" data-index="${idx}">
          <span class="option-letter">${letter}</span>
          <span class="option-text">${escapeHtml(text)}</span>
        </button>
      `;
    });
    dom.optionsList.innerHTML = optionsHtml;

    if (multi) {
      dom.multiConfirmWrapper.classList.remove('hidden');
      dom.btnConfirmMulti.disabled = true;
      dom.btnConfirmMulti.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Xác nhận câu trả lời (0 đã chọn)</span>
      `;
      if (dom.multiCount) dom.multiCount.textContent = '0';

      dom.optionsList.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleMultiOption(btn));
      });
    } else {
      dom.multiConfirmWrapper.classList.add('hidden');
      dom.optionsList.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => handleSingleAnswer(btn));
      });
    }

    dom.flashcard.scrollTop = 0;
    adjustCardHeight();
  }

  function adjustCardHeight() {
    requestAnimationFrame(() => {
      const frontHeight = dom.cardFront.scrollHeight;
      const minHeight = Math.max(420, frontHeight);
      dom.flashcard.style.minHeight = minHeight + 'px';
      dom.cardFront.style.minHeight = minHeight + 'px';
      dom.cardBack.style.minHeight = minHeight + 'px';
    });
  }

  function toggleMultiOption(btn) {
    if (state.isAnswered) return;
    const letter = btn.dataset.letter;
    const idx = state.selectedMulti.indexOf(letter);

    if (idx > -1) {
      state.selectedMulti.splice(idx, 1);
      btn.classList.remove('selected');
    } else {
      state.selectedMulti.push(letter);
      btn.classList.add('selected');
    }

    const count = state.selectedMulti.length;
    dom.btnConfirmMulti.disabled = (count === 0);
    dom.btnConfirmMulti.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Xác nhận câu trả lời (${count} đã chọn)</span>
    `;
  }

  function submitMultiAnswer() {
    if (state.isAnswered || state.selectedMulti.length === 0) return;
    state.isAnswered = true;
    dom.btnConfirmMulti.disabled = true;

    const q = state.quizQuestions[state.currentIndex];
    const userSelected = [...state.selectedMulti].sort();
    const correctAnswers = [...(Array.isArray(q.answer) ? q.answer : [q.answer])].sort();

    const isCorrect = userSelected.length === correctAnswers.length &&
      userSelected.every((val, idx) => val === correctAnswers[idx]);

    state.answers[q.id] = {
      selected: userSelected,
      correct: isCorrect,
    };

    if (!state.reviewMode || state.reviewMode === 'all') {
      saveExamResult(state.currentExam, state.answers, false);
    } else if (state.reviewMode === 'wrong' && isCorrect) {
      if (state.isMockExam) {
        state.answers[q.id] = { selected: userSelected, correct: true };
        saveMockExamResult(state.answers, false);
      } else {
        const progress = loadSubjectProgress();
        if (progress[state.currentExam] && progress[state.currentExam].answers) {
          progress[state.currentExam].answers[q.id] = { selected: userSelected, correct: true };
          saveExamResult(state.currentExam, progress[state.currentExam].answers, false);
        }
      }
    }

    dom.optionsList.querySelectorAll('.option-btn').forEach(b => {
      b.classList.add('disabled');
      const letter = b.dataset.letter;
      if (correctAnswers.includes(letter)) {
        if (userSelected.includes(letter)) {
          b.classList.remove('selected');
          b.classList.add('correct');
        } else {
          b.classList.add('correct-answer');
        }
      } else {
        if (userSelected.includes(letter)) {
          b.classList.remove('selected');
          b.classList.add('wrong');
        }
      }
    });

    renderCardBack(q, userSelected, isCorrect);

    setTimeout(() => {
      dom.flashcard.classList.add('flipped');
      dom.btnNext.classList.add('visible');
      adjustCardHeight();
    }, 700);
  }

  function handleSingleAnswer(btn) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    const q = state.quizQuestions[state.currentIndex];
    const selectedLetter = btn.dataset.letter;

    let isCorrect = false;
    if (Array.isArray(q.answer)) {
      isCorrect = q.answer.includes(selectedLetter);
    } else {
      isCorrect = selectedLetter === q.answer;
    }

    state.answers[q.id] = {
      selected: selectedLetter,
      correct: isCorrect,
    };

    if (!state.reviewMode || state.reviewMode === 'all') {
      saveExamResult(state.currentExam, state.answers, false);
    } else if (state.reviewMode === 'wrong' && isCorrect) {
      if (state.isMockExam) {
        state.answers[q.id] = { selected: selectedLetter, correct: true };
        saveMockExamResult(state.answers, false);
      } else {
        const progress = loadSubjectProgress();
        if (progress[state.currentExam] && progress[state.currentExam].answers) {
          progress[state.currentExam].answers[q.id] = { selected: selectedLetter, correct: true };
          saveExamResult(state.currentExam, progress[state.currentExam].answers, false);
        }
      }
    }

    dom.optionsList.querySelectorAll('.option-btn').forEach(b => {
      b.classList.add('disabled');
    });

    btn.classList.add(isCorrect ? 'correct' : 'wrong');

    if (!isCorrect) {
      const correctAnswer = Array.isArray(q.answer) ? q.answer : [q.answer];
      dom.optionsList.querySelectorAll('.option-btn').forEach(b => {
        if (correctAnswer.includes(b.dataset.letter)) {
          b.classList.add('correct-answer');
        }
      });
    }

    renderCardBack(q, selectedLetter, isCorrect);

    setTimeout(() => {
      dom.flashcard.classList.add('flipped');
      dom.btnNext.classList.add('visible');
      adjustCardHeight();
    }, 700);
  }

  // ---- Render Card Back ----
  function renderCardBack(q, selected, isCorrect) {
    // Result Status Badge (SVG, No Emoji)
    if (isCorrect) {
      dom.resultStatusBadge.className = 'result-status-badge correct';
      dom.resultStatusBadge.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Chính xác</span>
      `;
    } else {
      dom.resultStatusBadge.className = 'result-status-badge wrong';
      dom.resultStatusBadge.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        <span>Chưa chính xác</span>
      `;
    }

    dom.questionTextBack.textContent = q.question;

    const correctLetters = Array.isArray(q.answer) ? q.answer : [q.answer];
    const correctLettersStr = correctLetters.join(', ');

    const selectedLetters = Array.isArray(selected) ? selected : (selected ? [selected] : []);
    const selectedLettersStr = selectedLetters.length > 0 ? selectedLetters.join(', ') : '(Không chọn)';

    const correctItemsHtml = correctLetters.map(l => {
      return `<div><strong>${l}.</strong> ${escapeHtml(getOptionText(q, l))}</div>`;
    }).join('');

    const selectedItemsHtml = selectedLetters.map(l => {
      return `<div><strong>${l}.</strong> ${escapeHtml(getOptionText(q, l))}</div>`;
    }).join('');

    let reviewHtml = '';

    if (isCorrect) {
      reviewHtml += `
        <div class="answer-item correct-highlight">
          <div>
            <div class="answer-label" style="color: var(--accent-green); margin-bottom: 4px;">Đáp án đúng (${correctLettersStr}):</div>
            <div style="font-size: 13.5px; opacity: 0.95;">${correctItemsHtml}</div>
          </div>
        </div>
      `;
    } else {
      reviewHtml += `
        <div class="answer-item wrong-highlight">
          <div>
            <div class="answer-label" style="color: var(--accent-red); margin-bottom: 4px;">Bạn đã chọn (${selectedLettersStr}):</div>
            <div style="font-size: 13.5px; opacity: 0.95;">${selectedItemsHtml}</div>
          </div>
        </div>
        <div class="answer-item correct-highlight">
          <div>
            <div class="answer-label" style="color: var(--accent-green); margin-bottom: 4px;">Đáp án đúng đầy đủ (${correctLettersStr}):</div>
            <div style="font-size: 13.5px; opacity: 0.95;">${correctItemsHtml}</div>
          </div>
        </div>
      `;
    }

    dom.answerReview.innerHTML = reviewHtml;

    if (q.note) {
      dom.noteBox.innerHTML = `<strong>Ghi chú:</strong> ${escapeHtml(q.note)}`;
      dom.noteBox.classList.add('visible');
    } else {
      dom.noteBox.classList.remove('visible');
      dom.noteBox.textContent = '';
    }
  }

  function getOptionText(q, letter) {
    const opt = q.options.find(o => o.startsWith(letter + '.'));
    return opt ? opt.substring(3) : '';
  }

  // ---- Next Question ----
  function nextQuestion() {
    state.currentIndex++;

    if (state.currentIndex >= state.quizQuestions.length) {
      showResults(true);
      return;
    }

    dom.flashcard.classList.remove('flipped');
    dom.btnNext.classList.remove('visible');

    setTimeout(() => {
      renderQuestion();
    }, 300);
  }

  // ---- Show Results ----
  function showResults(shouldSave = true) {
    const questions = state.quizQuestions;
    const totalQuestions = questions.length;

    let correctCount = 0;
    let wrongCount = 0;
    let answeredCount = 0;

    questions.forEach(q => {
      const a = state.answers[q.id];
      if (a) {
        answeredCount++;
        if (a.correct) correctCount++;
        else wrongCount++;
      }
    });

    if (answeredCount < totalQuestions) {
      wrongCount = totalQuestions - correctCount;
    }

    const pct = Math.round((correctCount / totalQuestions) * 100);

    if (shouldSave && (!state.reviewMode || state.reviewMode === 'all')) {
      saveExamResult(state.currentExam, state.answers, true);
    }

    // Result Header Info
    const sub = getSubConfig();
    if (state.isMockExam) {
      const mock = getMockExamById(state.currentMockId);
      const title = mock ? mock.title : 'Đề thi thử';
      dom.resultTypeTag.textContent = `${title} • ${sub.code}`;
      dom.resultTitle.textContent = `Kết quả thi thử`;
      if (dom.btnNewMock) dom.btnNewMock.classList.remove('hidden');
    } else {
      dom.resultTypeTag.textContent = `${sub.code} • Bộ đề ${state.currentExam}`;
      dom.resultTitle.textContent = `Bộ đề ${state.currentExam}`;
      if (dom.btnNewMock) dom.btnNewMock.classList.add('hidden');
    }

    if (pct >= 90) {
      dom.resultSubtitle.textContent = 'Xuất sắc! Bạn nắm rất vững kiến thức.';
    } else if (pct >= 70) {
      dom.resultSubtitle.textContent = 'Kết quả tốt! Hãy ôn lại các câu sai để đạt điểm tối đa.';
    } else if (pct >= 50) {
      dom.resultSubtitle.textContent = 'Kết quả khá. Hãy học lại những câu chưa chính xác bên dưới.';
    } else {
      dom.resultSubtitle.textContent = 'Cần củng cố thêm kiến thức. Hãy bấm học lại câu sai để ôn tập.';
    }

    // Score Circle
    dom.scoreNum.textContent = correctCount;
    dom.scoreTotal.textContent = `/${totalQuestions}`;

    const svgEl = dom.scoreFill.closest('svg');
    if (!svgEl.querySelector('defs')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.innerHTML = `
        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #7c3aed"/>
          <stop offset="50%" style="stop-color: #3b82f6"/>
          <stop offset="100%" style="stop-color: #06b6d4"/>
        </linearGradient>
      `;
      svgEl.prepend(defs);
    }

    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (pct / 100) * circumference;

    dom.resultStats.innerHTML = `
      <div class="result-stat">
        <div class="result-stat-value correct-color">${correctCount}</div>
        <div class="result-stat-label">Số câu đúng</div>
      </div>
      <div class="result-stat">
        <div class="result-stat-value wrong-color">${wrongCount}</div>
        <div class="result-stat-label">Số câu sai</div>
      </div>
      <div class="result-stat">
        <div class="result-stat-value percent-color">${pct}%</div>
        <div class="result-stat-label">Tỷ lệ chính xác</div>
      </div>
    `;

    // Buttons
    dom.btnReviewWrongText.textContent = `Học lại câu sai (${wrongCount})`;
    dom.btnReviewWrong.disabled = (wrongCount === 0);

    dom.btnReviewCorrectText.textContent = `Ôn lại câu đúng (${correctCount})`;
    dom.btnReviewCorrect.disabled = (correctCount === 0);

    dom.btnRestartText.textContent = state.isMockExam ? 'Làm lại đề thi này' : 'Làm lại bộ đề này';

    renderReviewList(questions);

    showView('result');

    dom.scoreFill.style.strokeDashoffset = circumference;
    setTimeout(() => {
      dom.scoreFill.style.strokeDashoffset = offset;
    }, 150);
  }

  // ---- Render Review List (Clean Vector Icons, No Emoji) ----
  function renderReviewList(questions) {
    let html = '<div class="review-list-title">Chi tiết từng câu hỏi trong đề:</div>';

    questions.forEach((q) => {
      const answer = state.answers[q.id];
      const isAnswered = !!answer;
      const isCorrect = isAnswered && answer.correct;

      const iconHtml = !isAnswered ?
        `<span class="review-item-icon unanswered"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg></span>` :
        (isCorrect ?
          `<span class="review-item-icon correct"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></span>` :
          `<span class="review-item-icon wrong"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>`);

      const correctStr = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
      const selectedStr = isAnswered ?
        (Array.isArray(answer.selected) ? answer.selected.join(', ') : answer.selected) : '';

      const shortQ = q.question.length > 70 ? q.question.substring(0, 70) + '...' : q.question;

      html += `
        <div class="review-item" data-qid="${q.id}">
          ${iconHtml}
          <span class="review-item-text"><strong>Câu ${q.id}:</strong> ${escapeHtml(shortQ)}</span>
          <span class="review-item-answer ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? `Đúng (${correctStr})` : (isAnswered ? `${selectedStr} → ${correctStr}` : `Chưa làm`)}
          </span>
        </div>
      `;
    });

    dom.reviewList.innerHTML = html;
  }

  // ---- Event Handlers ----
  function setupEvents() {
    // Subject Selection Cards
    $$('.subject-card').forEach(card => {
      card.addEventListener('click', () => {
        const sub = card.dataset.subject;
        selectSubject(sub);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const sub = card.dataset.subject;
          selectSubject(sub);
        }
      });
    });

    // Switch subject button in header
    dom.btnSwitchSubject.addEventListener('click', goToSubjects);

    // Header Back button
    dom.btnBack.addEventListener('click', () => {
      if (state.currentView === 'home') {
        goToSubjects();
      } else if (state.currentView === 'quiz' || state.currentView === 'result') {
        goToDashboard();
      }
    });

    // Quiz nav back button
    if (dom.btnQuizBack) {
      dom.btnQuizBack.addEventListener('click', goToDashboard);
    }

    // Logo click -> Subjects or Dashboard
    dom.logoHome.addEventListener('click', () => {
      if (state.currentView !== 'subjects') {
        goToSubjects();
      }
    });

    // Dashboard Tabs
    if (dom.tabBtnExams) {
      dom.tabBtnExams.addEventListener('click', () => switchTab('exams'));
    }
    if (dom.tabBtnMock) {
      dom.tabBtnMock.addEventListener('click', () => switchTab('mock'));
    }

    // Mock exam start button
    dom.btnMockStart.addEventListener('click', startMockExam);

    // Next question
    dom.btnNext.addEventListener('click', nextQuestion);

    // Multi-answer confirm button
    if (dom.btnConfirmMulti) {
      dom.btnConfirmMulti.addEventListener('click', submitMultiAnswer);
    }

    // Result view buttons
    dom.btnReviewWrong.addEventListener('click', () => {
      const wrongQuestions = state.quizQuestions.filter(q => {
        const a = state.answers[q.id];
        return !a || !a.correct;
      });

      if (wrongQuestions.length === 0) {
        alert('Chúc mừng! Bạn không có câu sai nào trong đề này!');
        return;
      }

      state.currentIndex = 0;
      state.quizQuestions = wrongQuestions;
      state.selectedMulti = [];
      state.reviewMode = 'wrong';

      dom.quizTitle.textContent = `Học lại ${wrongQuestions.length} câu sai`;
      dom.quizModeTag.textContent = `Học câu sai`;
      dom.quizModeTag.className = 'quiz-mode-tag visible';

      showView('quiz');
      renderQuestion();
    });

    dom.btnReviewCorrect.addEventListener('click', () => {
      const correctQuestions = state.quizQuestions.filter(q => {
        const a = state.answers[q.id];
        return a && a.correct;
      });

      if (correctQuestions.length === 0) {
        alert('Chưa có câu nào trả lời đúng!');
        return;
      }

      state.currentIndex = 0;
      state.quizQuestions = correctQuestions;
      state.selectedMulti = [];
      state.reviewMode = 'correct';

      dom.quizTitle.textContent = `Ôn lại ${correctQuestions.length} câu đúng`;
      dom.quizModeTag.textContent = `Ôn câu đúng`;
      dom.quizModeTag.className = 'quiz-mode-tag visible';

      showView('quiz');
      renderQuestion();
    });

    dom.btnRestart.addEventListener('click', () => {
      if (state.isMockExam) {
        if (state.currentMockId) {
          restartMockById(state.currentMockId);
        } else {
          startMockExam();
        }
      } else {
        startExam(state.currentExam, null, null, true);
      }
    });

    if (dom.btnNewMock) {
      dom.btnNewMock.addEventListener('click', startMockExam);
    }

    dom.btnResultHome.addEventListener('click', goToDashboard);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (state.currentView !== 'quiz') return;

      const q = state.quizQuestions[state.currentIndex];
      const multi = q && isMultiAnswerQuestion(q);

      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4 };
      const key = e.key.toLowerCase();

      if (keyMap[key] !== undefined && !state.isAnswered) {
        const btns = dom.optionsList.querySelectorAll('.option-btn');
        if (btns[keyMap[key]]) {
          if (multi) {
            toggleMultiOption(btns[keyMap[key]]);
          } else {
            handleSingleAnswer(btns[keyMap[key]]);
          }
        }
      }

      if (e.key === 'Enter' || e.key === ' ') {
        if (multi && !state.isAnswered && state.selectedMulti.length > 0) {
          e.preventDefault();
          submitMultiAnswer();
          return;
        }

        if (state.isAnswered && state.isFlipped) {
          e.preventDefault();
          nextQuestion();
          return;
        }
      }

      if (e.key === 'ArrowRight' && state.isAnswered && state.isFlipped) {
        e.preventDefault();
        nextQuestion();
      }
    });
  }

  // ---- Initialize ----
  function init() {
    setupEvents();
    updateSubjectProgressCards();

    // Check last subject or default to subjects view
    let lastSub = null;
    try {
      lastSub = localStorage.getItem('quizlet_last_subject');
    } catch {}

    if (lastSub && SUBJECTS[lastSub]) {
      // Still show subjects view on first load if user wanted screen 1,
      // or start on subjects screen cleanly as requested
      showView('subjects');
    } else {
      showView('subjects');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
