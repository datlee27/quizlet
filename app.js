/* ========================================
   MLN111 Quizlet — Application Logic
   ======================================== */

(function () {
  'use strict';

  // ---- Constants ----
  const EXAMS_COUNT = 12;
  const QUESTIONS_PER_EXAM = 50;
  const STORAGE_KEY = 'mln111_quizlet_progress_v2';

  // Migrate old storage if exists
  try {
    const old = localStorage.getItem('mln111_quizlet_progress');
    if (old && !localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, old);
    }
  } catch (e) {}

  // ---- State ----
  let state = {
    currentView: 'home',    // 'home' | 'quiz' | 'result'
    currentExam: null,       // 1-12
    currentIndex: 0,         // current question index within quiz
    quizQuestions: [],        // array of question objects for current quiz
    answers: {},             // { questionId: { selected: 'A' | ['A','B'], correct: bool } }
    selectedMulti: [],       // temporary array for multi-answer questions: ['A', 'C']
    isFlipped: false,
    isAnswered: false,
    reviewMode: null,        // null | 'wrong' | 'correct' | 'all'
  };

  // ---- DOM Cache ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const dom = {
    btnBack: $('#btn-back'),
    logoHome: $('#logo-home'),
    headerStats: $('#header-stats'),
    viewHome: $('#view-home'),
    viewQuiz: $('#view-quiz'),
    viewResult: $('#view-result'),
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
    resultIcon: $('#result-icon'),
    questionTextBack: $('#question-text-back'),
    answerReview: $('#answer-review'),
    noteBox: $('#note-box'),
    btnNext: $('#btn-next'),
    resultEmoji: $('#result-emoji'),
    resultTitle: $('#result-title'),
    resultSubtitle: $('#result-subtitle'),
    scoreFill: $('#score-fill'),
    scoreNum: $('#score-num'),
    scoreTotal: $('#score-total'),
    resultStats: $('#result-stats'),
    btnReviewWrong: $('#btn-review-wrong'),
    btnReviewCorrect: $('#btn-review-correct'),
    btnRestart: $('#btn-restart'),
    btnResultHome: $('#btn-result-home'),
    reviewList: $('#review-list'),
  };

  // ---- Persistence ----
  function loadProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  function saveExamResult(examNum, answers, isCompleted = false) {
    if (!examNum) return;
    const progress = loadProgress();
    const questions = getExamQuestions(examNum);
    const total = questions.length;

    // Count correct based on all questions in this exam
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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    updateHeaderStats();
  }

  function updateHeaderStats() {
    const progress = loadProgress();
    const totalAttempts = Object.values(progress).reduce((sum, p) => sum + (p.attempts || 0), 0);
    const completedExams = Object.values(progress).filter(p => p.answers && Object.keys(p.answers).length > 0).length;
    if (completedExams > 0 || totalAttempts > 0) {
      dom.headerStats.innerHTML = `
        <span class="stat-badge">📚 Đã làm: ${completedExams}/12 đề</span>
      `;
    }
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

  function getExamQuestions(examNum) {
    const start = (examNum - 1) * QUESTIONS_PER_EXAM;
    const end = Math.min(start + QUESTIONS_PER_EXAM, QUESTIONS.length);
    return QUESTIONS.slice(start, end);
  }

  function getExamQuestionCount(examNum) {
    const start = (examNum - 1) * QUESTIONS_PER_EXAM;
    const end = Math.min(start + QUESTIONS_PER_EXAM, QUESTIONS.length);
    return end - start;
  }

  function isMultiAnswerQuestion(q) {
    return !!(q.multiAnswer || (Array.isArray(q.answer) && q.answer.length > 1));
  }

  // ---- Navigation ----
  function showView(viewName) {
    state.currentView = viewName;
    dom.viewHome.classList.toggle('active', viewName === 'home');
    dom.viewQuiz.classList.toggle('active', viewName === 'quiz');
    dom.viewResult.classList.toggle('active', viewName === 'result');
    dom.btnBack.classList.toggle('hidden', viewName === 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goHome() {
    // If we're leaving quiz, save answers so far if not in temporary review mode
    if (state.currentView === 'quiz' && state.currentExam && (!state.reviewMode || state.reviewMode === 'all')) {
      if (Object.keys(state.answers).length > 0) {
        saveExamResult(state.currentExam, state.answers, false);
      }
    }
    state.currentExam = null;
    state.reviewMode = null;
    showView('home');
    renderExamGrid();
  }

  // ---- Render: Home ----
  function renderExamGrid() {
    const progress = loadProgress();
    let html = '';

    for (let i = 1; i <= EXAMS_COUNT; i++) {
      const count = getExamQuestionCount(i);
      const p = progress[i] || { attempts: 0, bestScore: 0, answers: {} };
      const hasAnswers = p.answers && Object.keys(p.answers).length > 0;
      const score = p.lastScore !== undefined ? p.lastScore : p.bestScore;
      const pct = hasAnswers ? Math.round((score / count) * 100) : 0;

      const cardClass = hasAnswers ? 'exam-card is-completed' : 'exam-card';

      html += `
        <div class="${cardClass}" data-exam="${i}" role="button" tabindex="0" aria-label="Bộ đề ${i}">
          <div class="exam-header-row">
            <div class="exam-number">${String(i).padStart(2, '0')}</div>
            ${hasAnswers ? `<span class="exam-status-badge">✓ Đã làm (${score}/${count})</span>` : ''}
          </div>
          <div class="exam-label">Bộ đề ${i}</div>
          <div class="exam-info">${count} câu hỏi • Câu ${(i - 1) * QUESTIONS_PER_EXAM + 1}–${Math.min(i * QUESTIONS_PER_EXAM, QUESTIONS.length)}</div>
          
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
              <button class="btn-card-action primary btn-action-view" data-exam="${i}">📋 Xem kết quả</button>
              <button class="btn-card-action btn-action-restart" data-exam="${i}">🔄 Làm lại</button>
            </div>
          ` : ''}
        </div>
      `;
    }

    dom.examGrid.innerHTML = html;

    // Attach click handlers
    dom.examGrid.querySelectorAll('.exam-card').forEach(card => {
      const examNum = parseInt(card.dataset.exam);

      // Card main click
      card.addEventListener('click', (e) => {
        // If clicking action buttons, do not trigger card click
        if (e.target.closest('.btn-card-action')) return;

        const p = progress[examNum];
        const hasAnswers = p && p.answers && Object.keys(p.answers).length > 0;

        if (hasAnswers) {
          // If already done, open results page directly as requested!
          showSavedResults(examNum);
        } else {
          // If not done, start quiz from scratch
          startExam(examNum, null, null, true);
        }
      });

      // Card keyboard Enter / Space
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('.btn-card-action')) return;
          e.preventDefault();
          const p = progress[examNum];
          const hasAnswers = p && p.answers && Object.keys(p.answers).length > 0;
          if (hasAnswers) {
            showSavedResults(examNum);
          } else {
            startExam(examNum, null, null, true);
          }
        }
      });
    });

    // Action button clicks inside cards
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

  // ---- Show Saved Results ----
  function showSavedResults(examNum) {
    const progress = loadProgress();
    const p = progress[examNum];
    if (!p || !p.answers || Object.keys(p.answers).length === 0) {
      startExam(examNum, null, null, true);
      return;
    }

    state.currentExam = examNum;
    state.quizQuestions = getExamQuestions(examNum);
    state.answers = { ...p.answers };
    state.reviewMode = null;

    showResults(false);
  }

  // ---- Start Exam ----
  function startExam(examNum, mode = null, filterFn = null, isFresh = false) {
    state.currentExam = examNum;
    state.currentIndex = 0;
    state.isFlipped = false;
    state.isAnswered = false;
    state.selectedMulti = [];
    state.reviewMode = mode;

    let allExamQuestions = getExamQuestions(examNum);
    let questions = allExamQuestions;

    if (filterFn) {
      questions = allExamQuestions.filter(filterFn);
    }

    if (mode === 'all') {
      questions = shuffle(allExamQuestions);
    }

    state.quizQuestions = questions;

    if (isFresh) {
      // Start completely fresh
      state.answers = {};
    } else if (mode === 'wrong' || mode === 'correct') {
      // Keep existing full answers, but we'll review selected questions
      const progress = loadProgress();
      if (progress[examNum] && progress[examNum].answers) {
        state.answers = { ...progress[examNum].answers };
      }
    }

    if (questions.length === 0) {
      alert('Không có câu hỏi nào để hiển thị!');
      return;
    }

    // Header tag and title
    let title = `Bộ đề ${examNum}`;
    if (mode === 'wrong') {
      dom.quizModeTag.textContent = `🔴 Học lại ${questions.length} câu sai`;
      dom.quizModeTag.className = 'quiz-mode-tag visible';
    } else if (mode === 'correct') {
      dom.quizModeTag.textContent = `🟢 Ôn lại ${questions.length} câu đúng`;
      dom.quizModeTag.className = 'quiz-mode-tag visible';
    } else {
      dom.quizModeTag.textContent = `50 câu hỏi`;
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

    // Reset card
    state.isFlipped = false;
    state.isAnswered = false;
    state.selectedMulti = [];
    dom.flashcard.classList.remove('flipped');
    dom.btnNext.classList.remove('visible');

    // Progress
    const total = state.quizQuestions.length;
    const current = state.currentIndex + 1;
    dom.quizCounter.textContent = `${current} / ${total}`;
    dom.progressFill.style.width = `${(current / total) * 100}%`;

    const multi = isMultiAnswerQuestion(q);

    // Badge
    let badgeText = `Câu ${q.id}`;
    if (multi) {
      badgeText += ' <span class="multi-answer-badge">Chọn nhiều đáp án</span>';
    }
    dom.questionBadge.innerHTML = badgeText;

    // Question text + Multi-hint
    if (multi) {
      dom.questionText.innerHTML = `
        ${escapeHtml(q.question)}
        <div class="multi-hint">💡 <strong>Câu hỏi chọn nhiều đáp án:</strong> Hãy nhấp chọn các đáp án bạn nghĩ là đúng, sau đó bấm nút <strong>Xác nhận câu trả lời</strong> bên dưới.</div>
      `;
    } else {
      dom.questionText.textContent = q.question;
    }

    // Options
    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      const letter = opt.charAt(0);
      const text = opt.substring(3); // Remove "A. " prefix
      optionsHtml += `
        <button class="option-btn" data-letter="${letter}" data-index="${idx}">
          <span class="option-letter">${letter}</span>
          <span class="option-text">${escapeHtml(text)}</span>
        </button>
      `;
    });
    dom.optionsList.innerHTML = optionsHtml;

    // Multi-answer confirm button controls
    if (multi) {
      dom.multiConfirmWrapper.classList.remove('hidden');
      dom.btnConfirmMulti.disabled = true;
      dom.btnConfirmMulti.textContent = '✓ Xác nhận câu trả lời (0 đã chọn)';
      if (dom.multiCount) dom.multiCount.textContent = '0';

      // Attach toggle click handlers
      dom.optionsList.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleMultiOption(btn));
      });
    } else {
      dom.multiConfirmWrapper.classList.add('hidden');

      // Attach single click handlers
      dom.optionsList.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => handleSingleAnswer(btn));
      });
    }

    // Scroll to top of card
    dom.flashcard.scrollTop = 0;
    adjustCardHeight();
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

  function adjustCardHeight() {
    requestAnimationFrame(() => {
      const frontHeight = dom.cardFront.scrollHeight;
      const minHeight = Math.max(420, frontHeight);
      dom.flashcard.style.minHeight = minHeight + 'px';
      dom.cardFront.style.minHeight = minHeight + 'px';
      dom.cardBack.style.minHeight = minHeight + 'px';
    });
  }

  // ---- Multi-answer: Toggle option ----
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
    if (dom.multiCount) dom.multiCount.textContent = count;
    dom.btnConfirmMulti.disabled = (count === 0);
    dom.btnConfirmMulti.textContent = `✓ Xác nhận câu trả lời (${count} đã chọn)`;
  }

  // ---- Multi-answer: Submit ----
  function submitMultiAnswer() {
    if (state.isAnswered) return;
    if (state.selectedMulti.length === 0) return;

    state.isAnswered = true;
    dom.btnConfirmMulti.disabled = true;

    const q = state.quizQuestions[state.currentIndex];
    const userSelected = [...state.selectedMulti].sort();
    const correctAnswers = [...(Array.isArray(q.answer) ? q.answer : [q.answer])].sort();

    // Determine correctness: user selection must exactly match correct answers
    const isCorrect = userSelected.length === correctAnswers.length &&
      userSelected.every((val, idx) => val === correctAnswers[idx]);

    // Save answer
    state.answers[q.id] = {
      selected: userSelected,
      correct: isCorrect,
    };

    // Auto-save to localStorage
    if (!state.reviewMode || state.reviewMode === 'all') {
      saveExamResult(state.currentExam, state.answers, false);
    } else if (state.reviewMode === 'wrong' && isCorrect) {
      const progress = loadProgress();
      if (progress[state.currentExam] && progress[state.currentExam].answers) {
        progress[state.currentExam].answers[q.id] = { selected: userSelected, correct: true };
        saveExamResult(state.currentExam, progress[state.currentExam].answers, false);
      }
    }

    // Disable all options
    dom.optionsList.querySelectorAll('.option-btn').forEach(b => {
      b.classList.add('disabled');
      const letter = b.dataset.letter;

      if (correctAnswers.includes(letter)) {
        if (userSelected.includes(letter)) {
          b.classList.remove('selected');
          b.classList.add('correct');
        } else {
          // Correct answer that was missed
          b.classList.add('correct-answer');
        }
      } else {
        if (userSelected.includes(letter)) {
          // Wrong answer that user picked
          b.classList.remove('selected');
          b.classList.add('wrong');
        }
      }
    });

    // Show card back
    renderCardBack(q, userSelected, isCorrect);

    // Flip card after short delay
    setTimeout(() => {
      dom.flashcard.classList.add('flipped');
      dom.btnNext.classList.add('visible');

      requestAnimationFrame(() => {
        const backHeight = dom.cardBack.scrollHeight;
        const frontHeight = dom.cardFront.scrollHeight;
        const minHeight = Math.max(420, frontHeight, backHeight);
        dom.flashcard.style.minHeight = minHeight + 'px';
        dom.cardFront.style.minHeight = minHeight + 'px';
        dom.cardBack.style.minHeight = minHeight + 'px';
      });
    }, 700);
  }

  // ---- Single-answer: Handle Answer ----
  function handleSingleAnswer(btn) {
    if (state.isAnswered) return;
    state.isAnswered = true;

    const q = state.quizQuestions[state.currentIndex];
    const selectedLetter = btn.dataset.letter;

    // Determine if correct
    let isCorrect = false;
    if (Array.isArray(q.answer)) {
      isCorrect = q.answer.includes(selectedLetter);
    } else {
      isCorrect = selectedLetter === q.answer;
    }

    // Save answer in state
    state.answers[q.id] = {
      selected: selectedLetter,
      correct: isCorrect,
    };

    // Auto-save to localStorage right away!
    if (!state.reviewMode || state.reviewMode === 'all') {
      saveExamResult(state.currentExam, state.answers, false);
    } else if (state.reviewMode === 'wrong' && isCorrect) {
      // If user was reviewing wrong and got it right, update main exam answers as well!
      const progress = loadProgress();
      if (progress[state.currentExam] && progress[state.currentExam].answers) {
        progress[state.currentExam].answers[q.id] = { selected: selectedLetter, correct: true };
        saveExamResult(state.currentExam, progress[state.currentExam].answers, false);
      }
    }

    // Disable all options
    dom.optionsList.querySelectorAll('.option-btn').forEach(b => {
      b.classList.add('disabled');
    });

    // Highlight selected
    btn.classList.add(isCorrect ? 'correct' : 'wrong');

    // If wrong, highlight the correct answer
    if (!isCorrect) {
      const correctAnswer = Array.isArray(q.answer) ? q.answer : [q.answer];
      dom.optionsList.querySelectorAll('.option-btn').forEach(b => {
        if (correctAnswer.includes(b.dataset.letter)) {
          b.classList.add('correct-answer');
        }
      });
    }

    // Show back card content
    renderCardBack(q, selectedLetter, isCorrect);

    // Flip card after short delay
    setTimeout(() => {
      dom.flashcard.classList.add('flipped');
      dom.btnNext.classList.add('visible');

      requestAnimationFrame(() => {
        const backHeight = dom.cardBack.scrollHeight;
        const frontHeight = dom.cardFront.scrollHeight;
        const minHeight = Math.max(420, frontHeight, backHeight);
        dom.flashcard.style.minHeight = minHeight + 'px';
        dom.cardFront.style.minHeight = minHeight + 'px';
        dom.cardBack.style.minHeight = minHeight + 'px';
      });
    }, 700);
  }

  // ---- Render Card Back ----
  function renderCardBack(q, selected, isCorrect) {
    dom.resultIcon.textContent = isCorrect ? '✅' : '❌';
    dom.questionTextBack.textContent = q.question;

    const correctLetters = Array.isArray(q.answer) ? q.answer : [q.answer];
    const correctLettersStr = correctLetters.join(', ');

    const selectedLetters = Array.isArray(selected) ? selected : (selected ? [selected] : []);
    const selectedLettersStr = selectedLetters.length > 0 ? selectedLetters.join(', ') : '(Không chọn)';

    // Build text details
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
            <div class="answer-label" style="color: var(--accent-green); margin-bottom: 4px;">✓ Bạn đã trả lời đúng (${correctLettersStr}):</div>
            <div style="font-size: 13.5px; opacity: 0.95;">${correctItemsHtml}</div>
          </div>
        </div>
      `;
    } else {
      reviewHtml += `
        <div class="answer-item wrong-highlight">
          <div>
            <div class="answer-label" style="color: var(--accent-red); margin-bottom: 4px;">✗ Bạn đã chọn (${selectedLettersStr}):</div>
            <div style="font-size: 13.5px; opacity: 0.95;">${selectedItemsHtml}</div>
          </div>
        </div>
        <div class="answer-item correct-highlight">
          <div>
            <div class="answer-label" style="color: var(--accent-green); margin-bottom: 4px;">✓ Đáp án đúng đầy đủ (${correctLettersStr}):</div>
            <div style="font-size: 13.5px; opacity: 0.95;">${correctItemsHtml}</div>
          </div>
        </div>
      `;
    }

    dom.answerReview.innerHTML = reviewHtml;

    // Note
    if (q.note) {
      dom.noteBox.innerHTML = `<strong>💡 Ghi chú:</strong> ${escapeHtml(q.note)}`;
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
      // Quiz complete
      showResults(true);
      return;
    }

    // Unflip card first
    dom.flashcard.classList.remove('flipped');
    dom.btnNext.classList.remove('visible');

    setTimeout(() => {
      renderQuestion();
    }, 300);
  }

  // ---- Show Results ----
  function showResults(shouldSave = true) {
    const fullExamQuestions = getExamQuestions(state.currentExam);
    const totalExamQuestions = fullExamQuestions.length;

    // Count correct from state.answers
    let correctCount = 0;
    let wrongCount = 0;
    let answeredCount = 0;

    fullExamQuestions.forEach(q => {
      const a = state.answers[q.id];
      if (a) {
        answeredCount++;
        if (a.correct) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    // If some questions not answered yet, count as wrong or pending
    if (answeredCount < totalExamQuestions) {
      wrongCount = totalExamQuestions - correctCount;
    }

    const pct = Math.round((correctCount / totalExamQuestions) * 100);

    // Save progress if finished full exam
    if (shouldSave && (!state.reviewMode || state.reviewMode === 'all')) {
      saveExamResult(state.currentExam, state.answers, true);
    }

    // Title & emoji
    let emoji, title, subtitle;
    if (pct >= 90) {
      emoji = '🏆';
      title = `Bộ đề ${state.currentExam} — Xuất sắc!`;
      subtitle = 'Bạn nắm rất vững kiến thức!';
    } else if (pct >= 70) {
      emoji = '🎉';
      title = `Bộ đề ${state.currentExam} — Rất tốt!`;
      subtitle = 'Cố gắng ôn lại các câu sai để đạt điểm tối đa nhé!';
    } else if (pct >= 50) {
      emoji = '💪';
      title = `Bộ đề ${state.currentExam} — Khá tốt!`;
      subtitle = 'Hãy dùng tính năng "Học lại câu sai" bên dưới!';
    } else {
      emoji = '📚';
      title = `Bộ đề ${state.currentExam} — Cần ôn tập thêm!`;
      subtitle = 'Hãy học lại những câu sai và thử lại nhé!';
    }

    dom.resultEmoji.textContent = emoji;
    dom.resultTitle.textContent = title;
    dom.resultSubtitle.textContent = subtitle;

    // Score circle
    dom.scoreNum.textContent = correctCount;
    dom.scoreTotal.textContent = `/${totalExamQuestions}`;

    // SVG gradient
    const svgEl = dom.scoreFill.closest('svg');
    if (!svgEl.querySelector('defs')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.innerHTML = `
        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #8b5cf6"/>
          <stop offset="50%" style="stop-color: #3b82f6"/>
          <stop offset="100%" style="stop-color: #06b6d4"/>
        </linearGradient>
      `;
      svgEl.prepend(defs);
    }

    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (pct / 100) * circumference;
    setTimeout(() => {
      dom.scoreFill.style.strokeDashoffset = offset;
    }, 100);

    // Stats
    dom.resultStats.innerHTML = `
      <div class="result-stat">
        <div class="result-stat-value correct-color">${correctCount}</div>
        <div class="result-stat-label">Đúng</div>
      </div>
      <div class="result-stat">
        <div class="result-stat-value wrong-color">${wrongCount}</div>
        <div class="result-stat-label">Sai</div>
      </div>
      <div class="result-stat">
        <div class="result-stat-value percent-color">${pct}%</div>
        <div class="result-stat-label">Tỷ lệ đúng</div>
      </div>
    `;

    // Dynamic buttons
    dom.btnReviewWrong.textContent = `🔴 Học lại câu sai (${wrongCount})`;
    dom.btnReviewWrong.disabled = (wrongCount === 0);

    dom.btnReviewCorrect.textContent = `🟢 Ôn lại câu đúng (${correctCount})`;
    dom.btnReviewCorrect.disabled = (correctCount === 0);

    // Review list
    renderReviewList(fullExamQuestions);

    showView('result');

    dom.scoreFill.style.strokeDashoffset = circumference;
    setTimeout(() => {
      dom.scoreFill.style.strokeDashoffset = offset;
    }, 150);

    if (shouldSave && pct >= 70) {
      launchConfetti();
    }
  }

  // ---- Render Review List ----
  function renderReviewList(questions) {
    let html = '<div class="review-list-title">📋 Chi tiết từng câu hỏi trong bộ đề:</div>';

    questions.forEach((q) => {
      const answer = state.answers[q.id];
      const isAnswered = !!answer;
      const isCorrect = isAnswered && answer.correct;
      const icon = !isAnswered ? '⚪' : (isCorrect ? '✅' : '❌');

      const correctStr = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;
      const selectedStr = isAnswered ?
        (Array.isArray(answer.selected) ? answer.selected.join(', ') : answer.selected) : '';

      const shortQ = q.question.length > 70 ? q.question.substring(0, 70) + '...' : q.question;

      html += `
        <div class="review-item" data-qid="${q.id}">
          <span class="review-item-icon">${icon}</span>
          <span class="review-item-text"><strong>Câu ${q.id}:</strong> ${escapeHtml(shortQ)}</span>
          <span class="review-item-answer ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? `Đúng (${correctStr})` : (isAnswered ? `${selectedStr} → Đúng: ${correctStr}` : `Chưa làm`)}
          </span>
        </div>
      `;
    });

    dom.reviewList.innerHTML = html;
  }

  // ---- Confetti ----
  function launchConfetti() {
    const existing = document.getElementById('confetti-canvas');
    if (existing) existing.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#ec4899', '#f59e0b'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
      });
    }

    let frame = 0;
    const maxFrames = 120;

    function animate() {
      frame++;
      if (frame > maxFrames) {
        canvas.remove();
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.rotation += p.rotationSpeed;
        p.opacity = Math.max(0, 1 - frame / maxFrames);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ---- Event Handlers ----
  function setupEvents() {
    // Header Back button - Smooth back without blocking confirm!
    dom.btnBack.addEventListener('click', goHome);

    // Quiz navbar back button
    if (dom.btnQuizBack) {
      dom.btnQuizBack.addEventListener('click', goHome);
    }

    // Logo click -> Home
    dom.logoHome.addEventListener('click', goHome);

    // Next question button
    dom.btnNext.addEventListener('click', nextQuestion);

    // Multi-answer confirm button
    if (dom.btnConfirmMulti) {
      dom.btnConfirmMulti.addEventListener('click', submitMultiAnswer);
    }

    // Result view buttons
    dom.btnReviewWrong.addEventListener('click', () => {
      // Find all questions in current exam that were wrong or not answered
      const fullExam = getExamQuestions(state.currentExam);
      const wrongQuestions = fullExam.filter(q => {
        const a = state.answers[q.id];
        return !a || !a.correct;
      });

      if (wrongQuestions.length === 0) {
        alert('Chúc mừng! Bạn không có câu sai nào trong bộ đề này!');
        return;
      }

      const wrongIds = new Set(wrongQuestions.map(q => q.id));
      startExam(state.currentExam, 'wrong', (q) => wrongIds.has(q.id));
    });

    dom.btnReviewCorrect.addEventListener('click', () => {
      const fullExam = getExamQuestions(state.currentExam);
      const correctQuestions = fullExam.filter(q => {
        const a = state.answers[q.id];
        return a && a.correct;
      });

      if (correctQuestions.length === 0) {
        alert('Chưa có câu nào trả lời đúng!');
        return;
      }

      const correctIds = new Set(correctQuestions.map(q => q.id));
      startExam(state.currentExam, 'correct', (q) => correctIds.has(q.id));
    });

    if (dom.btnRestart) {
      dom.btnRestart.addEventListener('click', () => {
        startExam(state.currentExam, null, null, true);
      });
    }

    dom.btnResultHome.addEventListener('click', goHome);

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

      // Enter or Space
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

    window.addEventListener('resize', () => {
      const canvas = document.getElementById('confetti-canvas');
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
  }

  // ---- Initialize ----
  function init() {
    renderExamGrid();
    setupEvents();
    updateHeaderStats();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
