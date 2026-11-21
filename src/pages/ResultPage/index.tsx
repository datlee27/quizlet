import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  HStack,
  VStack,
  SimpleGrid,
  Button,
  Flex,
  Center,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { quizService } from '@services/quizService';
import { progressService } from '@services/progressService';
import { IQuestion, ISubject, IMockExam, IUserAnswer } from '@interfaces/quiz.interface';
import { useSound } from '@contexts/sound-context';
import bgMain from '@assets/images/bg-main.png';
import { FiRotateCcw, FiArrowLeft, FiPlus, FiCheckCircle, FiXCircle } from 'react-icons/fi';

export const ResultPage: React.FC = () => {
  const { code, examNum, mockId } = useParams<{
    code: string;
    examNum?: string;
    mockId?: string;
  }>();

  const navigate = useNavigate();
  const { playSfx } = useSound();

  const isMock = Boolean(mockId);
  const examNumber = examNum ? parseInt(examNum, 10) : 1;

  const [subject, setSubject] = useState<ISubject | null>(null);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, IUserAnswer>>({});
  const [mockData, setMockData] = useState<IMockExam | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadResult = async () => {
      if (!code) return;
      setLoading(true);

      const sub = await quizService.getSubject(code);
      if (!sub) {
        navigate('/');
        return;
      }
      setSubject(sub);

      let qList: IQuestion[] = [];
      let ansMap: Record<number, IUserAnswer> = {};

      if (isMock && mockId) {
        const mock = await progressService.getMockExamById(code, mockId);
        if (mock) {
          setMockData(mock);
          qList = mock.questions;
          ansMap = mock.answers || {};
        }
      } else {
        qList = await quizService.getExamQuestions(code, examNumber);
        const prog = await progressService.getSubjectProgress(code);
        const examProg = prog[examNumber];
        if (examProg) {
          ansMap = examProg.answers || {};
        }
      }

      setQuestions(qList);
      setAnswers(ansMap);
      setLoading(false);

      // Trigger Celebration Confetti when completing mock exam or scoring >= 80% (Yêu cầu 8)
      const totalQ = qList.length;
      const correctCount = Object.values(ansMap).filter((a) => a.correct).length;
      const pct = totalQ > 0 ? (correctCount / totalQ) * 100 : 0;

      if (isMock || pct >= 80) {
        // Central celebratory burst
        confetti({
          particleCount: 110,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#9F73FF', '#98FD1D', '#FFEE58', '#60B1F3', '#FF4249'],
        });

        // Left cannon
        setTimeout(() => {
          confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0.1, y: 0.7 },
            colors: ['#98FD1D', '#FFEE58', '#9F73FF'],
          });
        }, 220);

        // Right cannon
        setTimeout(() => {
          confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 0.9, y: 0.7 },
            colors: ['#60B1F3', '#98FD1D', '#FF8A8E'],
          });
        }, 380);
      }
    };

    loadResult();
  }, [code, examNumber, mockId, isMock, navigate]);

  if (!subject) return null;

  const totalQuestions = questions.length;
  let correctCount = 0;
  let wrongCount = 0;

  questions.forEach((q) => {
    const a = answers[q.id];
    if (a && a.correct) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const pct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  let subtitle = 'Cần củng cố thêm kiến thức. Hãy bấm học lại câu sai để ôn tập.';
  if (pct >= 90) {
    subtitle = 'Xuất sắc! Bạn nắm rất vững kiến thức.';
  } else if (pct >= 70) {
    subtitle = 'Kết quả tốt! Hãy ôn lại các câu sai để đạt điểm tối đa.';
  } else if (pct >= 50) {
    subtitle = 'Kết quả khá. Hãy học lại những câu chưa chính xác bên dưới.';
  }

  // Circular progress calculations
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (pct / 100) * circumference;

  return (
    <Box
      minH="calc(100vh - 65px)"
      bgImage={`url(${bgMain})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgColor="#183581"
      py={{ base: '20px', md: '36px' }}
      px={{ base: '14px', md: '20px' }}
    >
      <Container maxW="860px">
        {/* Result Card */}
        <Box
          bg="rgba(40, 49, 145, 0.88)"
          backdropFilter="blur(20px)"
          border="1px solid rgba(255, 255, 255, 0.2)"
          borderRadius="24px"
          p={{ base: '24px 20px', md: '36px 36px' }}
          boxShadow="0 20px 50px rgba(0, 0, 0, 0.45)"
          mb="28px"
        >
          {/* Header */}
          <Center flexDirection="column" textAlign="center" mb="28px">
            <Badge
              bg="rgba(159, 115, 255, 0.25)"
              color="#FFEE58"
              border="1px solid rgba(159, 115, 255, 0.4)"
              px="14px"
              py="4px"
              borderRadius="10px"
              fontSize="13px"
              fontWeight={800}
              mb="10px"
            >
              {isMock ? `${mockData?.title || 'Đề thi thử'} • ${subject.code}` : `${subject.code} • Bộ đề ${examNumber}`}
            </Badge>
            <Heading fontSize={{ base: '24px', md: '32px' }} fontWeight={900} color="white" mb="8px">
              {isMock ? 'Kết Quả Thi Thử' : 'Bộ Đề Hoàn Thành'}
            </Heading>
            <Text color="rgba(255, 255, 255, 0.8)" fontSize="15px">
              {subtitle}
            </Text>
          </Center>

          {/* SVG Score Circle */}
          <Center mb="28px">
            <Box position="relative" w="140px" h="140px">
              <svg width="140" height="140" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9F73FF" />
                    <stop offset="50%" stopColor="#60B1F3" />
                    <stop offset="100%" stopColor="#98FD1D" />
                  </linearGradient>
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeOffset}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                />
              </svg>
              <Center position="absolute" inset={0} flexDirection="column">
                <Text fontSize="32px" fontWeight={900} color="white" lineHeight={1}>
                  {correctCount}
                </Text>
                <Text fontSize="13px" fontWeight={700} color="rgba(255, 255, 255, 0.6)">
                  /{totalQuestions}
                </Text>
              </Center>
            </Box>
          </Center>

          {/* Stats Grid */}
          <SimpleGrid columns={{ base: 3, md: isMock ? 4 : 3 }} spacing="12px" mb="28px">
            <Box bg="rgba(0, 0, 0, 0.22)" p="14px" borderRadius="12px" textAlign="center">
              <Text fontSize="22px" fontWeight={900} color="#98FD1D">
                {correctCount}
              </Text>
              <Text fontSize="12px" color="rgba(255, 255, 255, 0.7)">
                Số câu đúng
              </Text>
            </Box>

            <Box bg="rgba(0, 0, 0, 0.22)" p="14px" borderRadius="12px" textAlign="center">
              <Text fontSize="22px" fontWeight={900} color="#FF4249">
                {wrongCount}
              </Text>
              <Text fontSize="12px" color="rgba(255, 255, 255, 0.7)">
                Số câu sai
              </Text>
            </Box>

            <Box bg="rgba(0, 0, 0, 0.22)" p="14px" borderRadius="12px" textAlign="center">
              <Text fontSize="22px" fontWeight={900} color="#FFEE58">
                {pct}%
              </Text>
              <Text fontSize="12px" color="rgba(255, 255, 255, 0.7)">
                Độ chính xác
              </Text>
            </Box>

            {isMock && (
              <Box bg="rgba(0, 0, 0, 0.22)" p="14px" borderRadius="12px" textAlign="center">
                <Text fontSize="20px" fontWeight={900} color="#60B1F3">
                  {mockData?.durationMinutes || 45}p
                </Text>
                <Text fontSize="12px" color="rgba(255, 255, 255, 0.7)">
                  Thời gian thi
                </Text>
              </Box>
            )}
          </SimpleGrid>

          {/* Action Buttons */}
          <VStack spacing="12px" align="stretch">
            <HStack spacing="12px" wrap="wrap">
              <Button
                flex={1}
                h="46px"
                bg="rgba(255, 66, 73, 0.2)"
                color="#FF8A8E"
                border="1px solid rgba(255, 66, 73, 0.4)"
                borderRadius="10px"
                fontWeight={800}
                fontSize="14px"
                isDisabled={wrongCount === 0}
                onClick={() => {
                  playSfx('click');
                  if (isMock && mockData) {
                    navigate(`/quiz/${subject.code}/mock/${mockData.id}?mode=wrong`);
                  } else {
                    navigate(`/quiz/${subject.code}/exam/${examNumber}?mode=wrong`);
                  }
                }}
                _hover={{ bg: 'rgba(255, 66, 73, 0.35)', color: 'white' }}
              >
                Học lại câu sai ({wrongCount})
              </Button>

              <Button
                flex={1}
                h="46px"
                bg="rgba(152, 253, 29, 0.2)"
                color="#C3FF70"
                border="1px solid rgba(152, 253, 29, 0.4)"
                borderRadius="10px"
                fontWeight={800}
                fontSize="14px"
                isDisabled={correctCount === 0}
                onClick={() => {
                  playSfx('click');
                  if (isMock && mockData) {
                    navigate(`/quiz/${subject.code}/mock/${mockData.id}?mode=correct`);
                  } else {
                    navigate(`/quiz/${subject.code}/exam/${examNumber}?mode=correct`);
                  }
                }}
                _hover={{ bg: 'rgba(152, 253, 29, 0.35)', color: 'white' }}
              >
                Ôn lại câu đúng ({correctCount})
              </Button>
            </HStack>

            <HStack spacing="12px" wrap="wrap">
              <Button
                flex={1}
                h="46px"
                bg="rgba(255, 255, 255, 0.1)"
                color="white"
                borderRadius="10px"
                fontWeight={700}
                leftIcon={<FiRotateCcw />}
                onClick={() => {
                  playSfx('click');
                  if (isMock && mockData) {
                    navigate(`/quiz/${subject.code}/mock/${mockData.id}`);
                  } else {
                    navigate(`/quiz/${subject.code}/exam/${examNumber}?fresh=true`);
                  }
                }}
                _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
              >
                {isMock ? 'Làm lại đề thi này' : 'Làm lại từ đầu'}
              </Button>

              <Button
                flex={1}
                h="46px"
                bg="linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)"
                color="white"
                borderRadius="10px"
                fontWeight={800}
                leftIcon={<FiArrowLeft />}
                onClick={() => {
                  playSfx('click');
                  navigate(`/subject/${subject.code}`);
                }}
                _hover={{ filter: 'brightness(1.1)' }}
              >
                Về danh sách đề
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Question Review List */}
        <Box
          bg="rgba(40, 49, 145, 0.85)"
          backdropFilter="blur(16px)"
          border="1px solid rgba(255, 255, 255, 0.16)"
          borderRadius="20px"
          p={{ base: '20px', md: '28px' }}
        >
          <Heading fontSize="17px" fontWeight={800} color="white" mb="18px">
            Chi tiết từng câu hỏi trong bài ({totalQuestions} câu):
          </Heading>

          <VStack spacing="10px" align="stretch">
            {questions.map((q, idx) => {
              const a = answers[q.id];
              const isAnswered = Boolean(a);
              const isCorrect = isAnswered && a.correct;

              const selectedStr = a ? (Array.isArray(a.selected) ? a.selected.join(', ') : a.selected) : 'Chưa làm';
              const correctStr = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;

              return (
                <Flex
                  key={q.id}
                  justify="space-between"
                  align="center"
                  p="12px 16px"
                  borderRadius="10px"
                  bg={isCorrect ? 'rgba(152, 253, 29, 0.12)' : 'rgba(255, 66, 73, 0.12)'}
                  border="1px solid"
                  borderColor={isCorrect ? 'rgba(152, 253, 29, 0.3)' : 'rgba(255, 66, 73, 0.3)'}
                >
                  <Text fontSize="14px" color="white" noOfLines={1} flex={1} mr="12px">
                    <strong style={{ color: '#FFEE58' }}>Câu {idx + 1}:</strong> {q.question}
                  </Text>
                  <Badge
                    bg={isCorrect ? '#98FD1D' : '#FF4249'}
                    color={isCorrect ? '#183581' : 'white'}
                    fontSize="12px"
                    fontWeight={800}
                    px="8px"
                    py="2px"
                    borderRadius="6px"
                    whiteSpace="nowrap"
                  >
                    {isCorrect ? `Đúng (${correctStr})` : isAnswered ? `${selectedStr} → ${correctStr}` : 'Chưa làm'}
                  </Badge>
                </Flex>
              );
            })}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};
