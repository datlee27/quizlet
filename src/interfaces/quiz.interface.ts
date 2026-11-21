export interface IQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string | string[];
  multiAnswer?: boolean;
  note?: string;
}

export interface ISubject {
  code: string;           // 'MLN111' | 'MLN122' | 'AET' | 'HOD'
  name: string;           // Tên đầy đủ
  shortName: string;      // Tên ngắn gọn
  tag: string;            // Nhãn môn
  totalQuestions: number; // Tổng số câu hỏi
  totalExams: number;     // Tổng số bộ đề
  questionsPerExam: number; // 50
  coverImage?: string;    // Thumbnail card
  storageKey: string;
  mockStorageKey: string;
}

export interface IUserAnswer {
  selected: string | string[];
  correct: boolean;
}

export interface IExamProgress {
  score: number;
  total: number;
  isCompleted: boolean;
  completedAt?: number;
  answers: Record<number, IUserAnswer>;
}

export type ISubjectProgress = Record<number, IExamProgress>; // key: examNumber (1..N)

export interface IMockExam {
  id: string;
  examNumber: number;
  title: string;
  durationMinutes: number; // 30 | 45 | 50
  createdAt: number;
  updatedAt: number;
  questions: IQuestion[];
  answers: Record<number, IUserAnswer>;
  lastScore: number;
  total: number;
  isCompleted: boolean;
}
