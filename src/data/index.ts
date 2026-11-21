import { QUESTIONS as MLN111_QUESTIONS } from './mln111.data';
import { MLN122_QUESTIONS } from './mln122.data';
import { AET_QUESTIONS } from './aet.data';
import { HOD_QUESTIONS } from './hod.data';
import { IQuestion, ISubject } from '../interfaces/quiz.interface';

// Images for Subject Cards
import card1 from '@assets/images/card-1.png';
import card2 from '@assets/images/card-2.png';
import card3 from '@assets/images/card-3.png';
import card4 from '@assets/images/card-4.png';

export const ALL_QUESTIONS: Record<string, IQuestion[]> = {
  MLN111: MLN111_QUESTIONS,
  MLN122: MLN122_QUESTIONS,
  AET: AET_QUESTIONS,
  HOD: HOD_QUESTIONS,
};

export const SUBJECTS_CONFIG: ISubject[] = [
  {
    code: 'MLN111',
    name: 'Triết học Mác - Lênin',
    shortName: 'Triết học',
    tag: 'Triết học',
    totalQuestions: MLN111_QUESTIONS.length,
    totalExams: Math.ceil(MLN111_QUESTIONS.length / 50),
    questionsPerExam: 50,
    coverImage: card1,
    storageKey: 'mln111_quizlet_progress_v2',
    mockStorageKey: 'mln111_mock_exam_progress_v2',
  },
  {
    code: 'MLN122',
    name: 'Kinh tế chính trị Mác - Lênin',
    shortName: 'Kinh tế chính trị',
    tag: 'Kinh tế',
    totalQuestions: MLN122_QUESTIONS.length,
    totalExams: Math.ceil(MLN122_QUESTIONS.length / 50),
    questionsPerExam: 50,
    coverImage: card2,
    storageKey: 'mln122_quizlet_progress_v2',
    mockStorageKey: 'mln122_mock_exam_progress_v2',
  },
  {
    code: 'AET',
    name: 'Aesthetics & Art Theory',
    shortName: 'Mỹ học & Nghệ thuật',
    tag: 'Mỹ học',
    totalQuestions: AET_QUESTIONS.length,
    totalExams: Math.ceil(AET_QUESTIONS.length / 50),
    questionsPerExam: 50,
    coverImage: card3,
    storageKey: 'aet_quizlet_progress_v2',
    mockStorageKey: 'aet_mock_exam_progress_v2',
  },
  {
    code: 'HOD',
    name: 'History of Design',
    shortName: 'Lịch sử Thiết kế',
    tag: 'Lịch sử Thiết kế',
    totalQuestions: HOD_QUESTIONS.length,
    totalExams: Math.ceil(HOD_QUESTIONS.length / 50),
    questionsPerExam: 50,
    coverImage: card4,
    storageKey: 'hod_quizlet_progress_v2',
    mockStorageKey: 'hod_mock_exam_progress_v2',
  },
];
