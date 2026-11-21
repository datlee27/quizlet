import { describe, it, expect, beforeEach } from 'vitest';
import { ALL_QUESTIONS, SUBJECTS_CONFIG } from '../../data';
import { quizService } from '../quizService';
import { progressService } from '../progressService';
import { settingsService, DEFAULT_SETTINGS } from '../settingsService';
import { migrationService } from '../migrationService';

// Mock localStorage for vitest
const mockStore = new Map<string, string>();
const localStorageMock = {
  getItem: (key: string) => mockStore.get(key) || null,
  setItem: (key: string, val: string) => mockStore.set(key, String(val)),
  removeItem: (key: string) => mockStore.delete(key),
  clear: () => mockStore.clear(),
  key: (i: number) => Array.from(mockStore.keys())[i] || null,
  get length() {
    return mockStore.size;
  },
};
Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

describe('Phase 2: Data Models & Service Layer', () => {
  beforeEach(() => {
    mockStore.clear();
  });

  // 1. DATA INTEGRITY
  describe('Ngân hàng câu hỏi & Data Models', () => {
    it('MLN111 có đúng 598 câu hỏi', () => {
      expect(ALL_QUESTIONS['MLN111']).toBeDefined();
      expect(ALL_QUESTIONS['MLN111'].length).toBe(598);
    });

    it('MLN122 có đúng 538 câu hỏi', () => {
      expect(ALL_QUESTIONS['MLN122']).toBeDefined();
      expect(ALL_QUESTIONS['MLN122'].length).toBe(538);
    });

    it('AET có đúng 234 câu hỏi', () => {
      expect(ALL_QUESTIONS['AET']).toBeDefined();
      expect(ALL_QUESTIONS['AET'].length).toBe(234);
    });

    it('HOD có đúng 467 câu hỏi', () => {
      expect(ALL_QUESTIONS['HOD']).toBeDefined();
      expect(ALL_QUESTIONS['HOD'].length).toBe(467);
    });

    it('Tổng số câu hỏi toàn bộ 4 môn học đạt 1.837 câu', () => {
      const total =
        ALL_QUESTIONS['MLN111'].length +
        ALL_QUESTIONS['MLN122'].length +
        ALL_QUESTIONS['AET'].length +
        ALL_QUESTIONS['HOD'].length;
      expect(total).toBe(1837);
    });

    it('Mỗi câu hỏi đều có id, text, danh sách options >= 2 và đáp án hợp lệ', () => {
      for (const [code, list] of Object.entries(ALL_QUESTIONS)) {
        for (const q of list) {
          expect(q.id, `Subject ${code} question ID missing`).toBeGreaterThan(0);
          expect(q.question.trim().length, `Subject ${code} Q${q.id} empty question`).toBeGreaterThan(0);
          expect(q.options.length, `Subject ${code} Q${q.id} options < 2`).toBeGreaterThanOrEqual(2);
          expect(q.answer, `Subject ${code} Q${q.id} empty answer`).toBeTruthy();
        }
      }
    });

    it('Môn HOD có các câu hỏi multiAnswer với answer dạng mảng', () => {
      const multi = ALL_QUESTIONS['HOD'].filter((q) => q.multiAnswer);
      expect(multi.length).toBeGreaterThan(0);
      expect(Array.isArray(multi[0].answer)).toBe(true);
      expect(multi[0].answer.length).toBeGreaterThanOrEqual(2);
    });
  });

  // 2. QUIZ SERVICE
  describe('quizService', () => {
    it('getSubjects() trả về 4 môn học với đầy đủ thông số', async () => {
      const subs = await quizService.getSubjects();
      expect(subs.length).toBe(4);
      expect(subs.map((s) => s.code)).toEqual(['MLN111', 'MLN122', 'AET', 'HOD']);
    });

    it('getSubject() và getSubjectDetail() trả về thông tin chi tiết chính xác', async () => {
      const mln111 = await quizService.getSubject('MLN111');
      expect(mln111).not.toBeNull();
      expect(mln111?.name).toBe('Triết học Mác - Lênin');
      expect(mln111?.totalExams).toBe(12);

      const hod = await quizService.getSubjectDetail('HOD');
      expect(hod).not.toBeNull();
      expect(hod?.totalExams).toBe(10);
    });

    it('getExamQuestions() chia bộ đề chính xác 50 câu/đề', async () => {
      const exam1 = await quizService.getExamQuestions('MLN111', 1);
      expect(exam1.length).toBe(50);
      expect(exam1[0].id).toBe(1);

      // Đề 12 của MLN111 có 48 câu (598 - 11*50 = 48)
      const exam12 = await quizService.getExamQuestions('MLN111', 12);
      expect(exam12.length).toBe(48);
    });

    it('generateMockExam() sinh đề thi thử ngẫu nhiên đúng cấu hình', async () => {
      const mock = await quizService.generateMockExam('MLN122', 1, 30, 50);
      expect(mock.examNumber).toBe(1);
      expect(mock.title).toBe('Đề thi thử #1');
      expect(mock.durationMinutes).toBe(30);
      expect(mock.questions.length).toBe(50);
      expect(mock.isCompleted).toBe(false);
      expect(mock.id.startsWith('mock_')).toBe(true);
    });
  });

  // 3. PROGRESS SERVICE
  describe('progressService', () => {
    it('saveExamProgress() và getSubjectProgress() lưu và đọc tiến độ chính xác', async () => {
      const sampleAnswers = {
        1: { selected: 'A', correct: true },
        2: { selected: 'B', correct: false },
        3: { selected: 'C', correct: true },
      };

      await progressService.saveExamProgress('MLN111', 1, sampleAnswers, true);
      const prog = await progressService.getSubjectProgress('MLN111');

      expect(prog[1]).toBeDefined();
      expect(prog[1].isCompleted).toBe(true);
      expect(prog[1].score).toBe(2);
      expect(prog[1].answers[1].selected).toBe('A');
    });

    it('resetExamProgress() xoá tiến độ đề đã làm', async () => {
      await progressService.saveExamProgress('MLN111', 2, { 1: { selected: 'A', correct: true } });
      let prog = await progressService.getSubjectProgress('MLN111');
      expect(prog[2]).toBeDefined();

      await progressService.resetExamProgress('MLN111', 2);
      prog = await progressService.getSubjectProgress('MLN111');
      expect(prog[2]).toBeUndefined();
    });

    it('saveMockExam(), getMockExams(), getMockExamById() và deleteMockExam() hoạt động chuẩn CRUD', async () => {
      const mock = await quizService.generateMockExam('AET', 1, 45, 50);
      await progressService.saveMockExam('AET', mock);

      const list = await progressService.getMockExams('AET');
      expect(list.length).toBe(1);
      expect(list[0].id).toBe(mock.id);

      const found = await progressService.getMockExamById('AET', mock.id);
      expect(found).not.toBeNull();
      expect(found?.title).toBe('Đề thi thử #1');

      await progressService.deleteMockExam('AET', mock.id);
      const listAfter = await progressService.getMockExams('AET');
      expect(listAfter.length).toBe(0);
    });

    it('setLastActiveSubject() và getLastActiveSubject() quản lý môn học gần nhất', async () => {
      await progressService.setLastActiveSubject('HOD');
      const last = await progressService.getLastActiveSubject();
      expect(last).toBe('HOD');
    });
  });

  // 4. SETTINGS SERVICE
  describe('settingsService', () => {
    it('getSettings() trả về default values khi chưa có dữ liệu', async () => {
      const settings = await settingsService.getSettings();
      expect(settings).toEqual(DEFAULT_SETTINGS);
      expect(settings.enabled).toBe(true);
      expect(settings.masterVolume).toBe(0.8);
    });

    it('saveSettings() cập nhật và persist cấu hình mới', async () => {
      const updated = await settingsService.saveSettings({ masterVolume: 0.9, bgmPlaying: true });
      expect(updated.masterVolume).toBe(0.9);
      expect(updated.bgmPlaying).toBe(true);
      expect(updated.sfxVolume).toBe(0.8); // Các trường khác giữ nguyên

      const retrieved = await settingsService.getSettings();
      expect(retrieved.masterVolume).toBe(0.9);
    });

    it('resetSettings() khôi phục về mặc định', async () => {
      await settingsService.saveSettings({ masterVolume: 0.1 });
      const reset = await settingsService.resetSettings();
      expect(reset).toEqual(DEFAULT_SETTINGS);
    });
  });

  // 5. MIGRATION SERVICE
  describe('migrationService', () => {
    it('runDataMigration() tự động phát hiện và chuyển đổi dữ liệu legacy sang v2', async () => {
      const old111 = JSON.stringify({ 1: { score: 50, total: 50, isCompleted: true } });
      const oldHod = JSON.stringify({ 2: { score: 40, total: 50, isCompleted: true } });

      mockStore.set('mln111_quizlet_progress', old111);
      mockStore.set('hod_quizlet_progress', oldHod);

      const report = await migrationService.runDataMigration();
      expect(report.migratedCount).toBe(2);
      expect(report.errors.length).toBe(0);

      expect(mockStore.get('mln111_quizlet_progress_v2')).toBe(old111);
      expect(mockStore.get('hod_quizlet_progress_v2')).toBe(oldHod);
    });

    it('runDataMigration() có tính chất idempotent (không ghi đè nếu v2 đã tồn tại)', async () => {
      const existingV2 = JSON.stringify({ 1: { score: 50, total: 50, isCompleted: true } });
      const olderV1 = JSON.stringify({ 1: { score: 10, total: 50, isCompleted: false } });

      mockStore.set('mln122_quizlet_progress_v2', existingV2);
      mockStore.set('mln122_quizlet_progress', olderV1);

      const report = await migrationService.runDataMigration();
      expect(report.migratedCount).toBe(0);
      expect(mockStore.get('mln122_quizlet_progress_v2')).toBe(existingV2);
    });
  });
});
