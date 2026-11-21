import { ISubjectProgress, IMockExam, IUserAnswer } from '../interfaces/quiz.interface';
import { SUBJECTS_CONFIG } from '../data';

/**
 * Progress Service - Quản lý tiến độ học tập và lịch sử thi thử
 * Tách biệt hoàn toàn với UI, trả về Promise async/await chuẩn bị cho Backend REST API.
 */
export const progressService = {
  /**
   * Lấy cấu hình storageKey của môn
   */
  _getStorageKey(subjectCode: string): string {
    const sub = SUBJECTS_CONFIG.find((s) => s.code.toUpperCase() === subjectCode.toUpperCase());
    return sub ? sub.storageKey : `${subjectCode.toLowerCase()}_quizlet_progress_v2`;
  },

  /**
   * Lấy cấu hình mockStorageKey của môn
   */
  _getMockStorageKey(subjectCode: string): string {
    const sub = SUBJECTS_CONFIG.find((s) => s.code.toUpperCase() === subjectCode.toUpperCase());
    return sub ? sub.mockStorageKey : `${subjectCode.toLowerCase()}_mock_exam_progress_v2`;
  },

  /**
   * Lấy tiến độ các bộ đề ôn tập của môn học
   */
  async getSubjectProgress(subjectCode: string): Promise<ISubjectProgress> {
    await new Promise((r) => setTimeout(r, 20));
    try {
      const key = this._getStorageKey(subjectCode);
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  /**
   * Lưu tiến độ hoặc kết quả của một bộ đề
   */
  async saveExamProgress(
    subjectCode: string,
    examNum: number,
    answers: Record<number, IUserAnswer>,
    isCompleted: boolean = false
  ): Promise<void> {
    await new Promise((r) => setTimeout(r, 30));
    try {
      const key = this._getStorageKey(subjectCode);
      const current = await this.getSubjectProgress(subjectCode);

      const answeredValues = Object.values(answers);
      const score = answeredValues.filter((a) => a.correct).length;
      const total = answeredValues.length;

      current[examNum] = {
        score,
        total: Math.max(50, total),
        isCompleted,
        completedAt: isCompleted ? Date.now() : current[examNum]?.completedAt,
        answers,
      };

      localStorage.setItem(key, JSON.stringify(current));
    } catch (err) {
      console.error('Failed to save exam progress:', err);
    }
  },

  /**
   * Reset kết quả của một bộ đề để làm lại từ đầu
   */
  async resetExamProgress(subjectCode: string, examNum: number): Promise<void> {
    await new Promise((r) => setTimeout(r, 20));
    try {
      const key = this._getStorageKey(subjectCode);
      const current = await this.getSubjectProgress(subjectCode);
      delete current[examNum];
      localStorage.setItem(key, JSON.stringify(current));
    } catch (err) {
      console.error('Failed to reset exam progress:', err);
    }
  },

  /**
   * Lấy danh sách đề thi thử đã làm của môn
   */
  async getMockExams(subjectCode: string): Promise<IMockExam[]> {
    await new Promise((r) => setTimeout(r, 20));
    try {
      const key = this._getMockStorageKey(subjectCode);
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  /**
   * Lấy chi tiết một đề thi thử theo ID
   */
  async getMockExamById(subjectCode: string, mockId: string): Promise<IMockExam | null> {
    await new Promise((r) => setTimeout(r, 20));
    const mocks = await this.getMockExams(subjectCode);
    return mocks.find((m) => m.id === mockId) || null;
  },

  /**
   * Lưu hoặc cập nhật một đề thi thử
   */
  async saveMockExam(subjectCode: string, mock: IMockExam): Promise<void> {
    await new Promise((r) => setTimeout(r, 30));
    try {
      const key = this._getMockStorageKey(subjectCode);
      const mocks = await this.getMockExams(subjectCode);
      const idx = mocks.findIndex((m) => m.id === mock.id);

      if (idx >= 0) {
        mocks[idx] = { ...mock, updatedAt: Date.now() };
      } else {
        mocks.unshift(mock);
      }

      localStorage.setItem(key, JSON.stringify(mocks));
    } catch (err) {
      console.error('Failed to save mock exam:', err);
    }
  },

  /**
   * Xoá một đề thi thử khỏi danh sách
   */
  async deleteMockExam(subjectCode: string, mockId: string): Promise<void> {
    await new Promise((r) => setTimeout(r, 20));
    try {
      const key = this._getMockStorageKey(subjectCode);
      const mocks = await this.getMockExams(subjectCode);
      const filtered = mocks.filter((m) => m.id !== mockId);
      localStorage.setItem(key, JSON.stringify(filtered));
    } catch (err) {
      console.error('Failed to delete mock exam:', err);
    }
  },

  /**
   * Lấy môn học được chọn gần nhất
   */
  async getLastActiveSubject(): Promise<string | null> {
    try {
      return localStorage.getItem('quizlet_last_subject');
    } catch {
      return null;
    }
  },

  /**
   * Lưu môn học được chọn gần nhất
   */
  async setLastActiveSubject(subjectCode: string): Promise<void> {
    try {
      localStorage.setItem('quizlet_last_subject', subjectCode);
    } catch {}
  },
};
