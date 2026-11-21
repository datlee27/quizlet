import { IQuestion, ISubject, IMockExam } from '../interfaces/quiz.interface';
import { ALL_QUESTIONS, SUBJECTS_CONFIG } from '../data';

// Helper shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Quiz Service - Cung cấp dữ liệu môn học, bộ đề và sinh đề thi thử
 * Chuẩn bị sẵn cho việc thay thế bằng REST API call sau này.
 */
export const quizService = {
  /**
   * Lấy danh sách toàn bộ môn học
   */
  async getSubjects(): Promise<ISubject[]> {
    // Giả lập độ trễ nhẹ giống REST API
    await new Promise((resolve) => setTimeout(resolve, 50));
    return [...SUBJECTS_CONFIG];
  },

  /**
   * Lấy thông tin chi tiết một môn học
   */
  async getSubject(code: string): Promise<ISubject | null> {
    await new Promise((resolve) => setTimeout(resolve, 30));
    const sub = SUBJECTS_CONFIG.find((s) => s.code.toUpperCase() === code.toUpperCase());
    return sub ? { ...sub } : null;
  },

  /**
   * Lấy toàn bộ câu hỏi của một môn học
   */
  async getSubjectQuestions(code: string): Promise<IQuestion[]> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const questions = ALL_QUESTIONS[code.toUpperCase()];
    return questions ? [...questions] : [];
  },

  /**
   * Lấy câu hỏi của một bộ đề ôn tập cụ thể (examNumber: 1..N)
   */
  async getExamQuestions(code: string, examNumber: number): Promise<IQuestion[]> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const all = ALL_QUESTIONS[code.toUpperCase()] || [];
    const sub = SUBJECTS_CONFIG.find((s) => s.code.toUpperCase() === code.toUpperCase());
    const perExam = sub ? sub.questionsPerExam : 50;

    const startIdx = (examNumber - 1) * perExam;
    const endIdx = startIdx + perExam;
    return all.slice(startIdx, endIdx);
  },

  /**
   * Sinh ngẫu nhiên một đề thi thử (Mock Exam)
   */
  async generateMockExam(
    code: string,
    examNumber: number,
    durationMinutes: number = 45,
    count: number = 50
  ): Promise<IMockExam> {
    await new Promise((resolve) => setTimeout(resolve, 80));
    const all = ALL_QUESTIONS[code.toUpperCase()] || [];
    if (all.length === 0) {
      throw new Error(`Không tìm thấy câu hỏi cho môn học ${code}`);
    }

    const shuffled = shuffleArray(all);
    const selectedQuestions = shuffled.slice(0, Math.min(count, all.length));

    const mockId = `mock_${Date.now()}`;
    const newMock: IMockExam = {
      id: mockId,
      examNumber,
      title: `Đề thi thử #${examNumber}`,
      durationMinutes,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      questions: selectedQuestions,
      answers: {},
      lastScore: 0,
      total: selectedQuestions.length,
      isCompleted: false,
    };

    return newMock;
  },
};
