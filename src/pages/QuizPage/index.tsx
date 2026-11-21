import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  HStack,
  VStack,
  Button,
  Progress,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { quizService } from '@services/quizService';
import { progressService } from '@services/progressService';
import { IQuestion, ISubject, IMockExam, IUserAnswer } from '@interfaces/quiz.interface';
import { useSound } from '@contexts/sound-context';
import bgMain from '@assets/images/bg-main.png';
import { FiCheck, FiX, FiArrowRight, FiClock, FiAlertCircle } from 'react-icons/fi';

export const QuizPage: React.FC = () => {
  const { code, examNum, mockId } = useParams<{
    code: string;
    examNum?: string;
    mockId?: string;
  }>();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode'); // 'wrong' | 'correct' | null
  const isFresh = searchParams.get('fresh') === 'true';

  const navigate = useNavigate();
  const toast = useToast();
  const { playSfx } = useSound();

  const isMock = Boolean(mockId);
  const examNumber = examNum ? parseInt(examNum, 10) : 1;

  const [subject, setSubject] = useState<ISubject | null>(null);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, IUserAnswer>>({});
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [mockExamData, setMockExamData] = useState<IMockExam | null>(null);
  const [cardMinHeight, setCardMinHeight] = useState<number>(440);

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const frontInnerRef = useRef<HTMLDivElement>(null);
  const backInnerRef = useRef<HTMLDivElement>(null);

  const currentQuestion = questions[currentIndex];

  // Timer state for Mock Exam
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  const [timerTotal, setTimerTotal] = useState<number>(0);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Load questions and data
  useEffect(() => {
    const initQuiz = async () => {
      if (!code) return;
      const sub = await quizService.getSubject(code);
      if (!sub) {
        navigate('/');
        return;
      }
      setSubject(sub);

      let qList: IQuestion[] = [];
      let savedAnswers: Record<number, IUserAnswer> = {};

      if (isMock && mockId) {
        const mock = await progressService.getMockExamById(code, mockId);
        if (!mock) {
          navigate(`/subject/${code}`);
          return;
        }
        setMockExamData(mock);
        savedAnswers = mock.answers || {};

        if (mode === 'wrong') {
          qList = mock.questions.filter((q) => {
            const a = savedAnswers[q.id];
            return !a || !a.correct;
          });
        } else if (mode === 'correct') {
          qList = mock.questions.filter((q) => {
            const a = savedAnswers[q.id];
            return a && a.correct;
          });
        } else {
          qList = mock.questions;
        }

        // Setup timer (chỉ chạy timer khi làm bài đầy đủ, không chạy khi ôn lại câu sai/đúng)
        if (!mode) {
          const durationMins = mock.durationMinutes || 45;
          const totalSec = durationMins * 60;
          setTimerTotal(totalSec);
          setSecondsLeft(totalSec);
          startTimeRef.current = Date.now();
        } else {
          setTimerTotal(0);
          setSecondsLeft(0);
        }
      } else {
        const allExamQuestions = await quizService.getExamQuestions(code, examNumber);
        const prog = await progressService.getSubjectProgress(code);
        const savedExam = prog[examNumber];

        if (savedExam && !isFresh) {
          savedAnswers = savedExam.answers || {};
        }

        if (mode === 'wrong') {
          qList = allExamQuestions.filter((q) => {
            const a = savedAnswers[q.id];
            return !a || !a.correct;
          });
        } else if (mode === 'correct') {
          qList = allExamQuestions.filter((q) => {
            const a = savedAnswers[q.id];
            return a && a.correct;
          });
        } else {
          qList = allExamQuestions;
        }
      }

      if (qList.length === 0) {
        toast({
          title: 'Thông báo',
          description: 'Không có câu hỏi nào để ôn tập trong chế độ này.',
          status: 'info',
        });
        navigate(`/subject/${code}`);
        return;
      }

      setQuestions(qList);
      setAnswers(savedAnswers);
      setCurrentIndex(0);
      setIsFlipped(false);
      setIsAnswered(false);
      setSelectedMulti([]);
    };

    initQuiz();
  }, [code, examNumber, mockId, isMock, mode, isFresh, navigate, toast]);

  // Dynamically calculate and adjust card height to wrap all options without overflow
  useEffect(() => {
    const updateCardHeight = () => {
      const fh = frontInnerRef.current?.offsetHeight || frontRef.current?.scrollHeight || 0;
      const bh = backInnerRef.current?.offsetHeight || backRef.current?.scrollHeight || 0;
      const pad = window.innerWidth >= 768 ? 76 : 56;
      const needed = Math.max(fh, bh) + pad + 20;
      setCardMinHeight(Math.max(needed, 420));
    };

    updateCardHeight();
    const timer = setTimeout(updateCardHeight, 50);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateCardHeight());
      if (frontInnerRef.current) ro.observe(frontInnerRef.current);
      if (backInnerRef.current) ro.observe(backInnerRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (ro) ro.disconnect();
    };
  }, [currentIndex, currentQuestion, isFlipped, selectedMulti]);

  // Finish exam function
  const handleFinishExam = useCallback(
    async (autoSubmit = false) => {
      if (!code || !subject) return;

      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }

      playSfx('complete');

      if (isMock && mockExamData) {
        const updatedMock: IMockExam = {
          ...mockExamData,
          answers,
          lastScore: Object.values(answers).filter((a) => a.correct).length,
          isCompleted: true,
          updatedAt: Date.now(),
        };
        await progressService.saveMockExam(code, updatedMock);
        navigate(`/result/${code}/mock/${mockExamData.id}`);
      } else {
        await progressService.saveExamProgress(code, examNumber, answers, true);
        navigate(`/result/${code}/exam/${examNumber}`);
      }
    },
    [code, subject, isMock, mockExamData, answers, examNumber, navigate, playSfx]
  );

  // Timer effect for mock exam
  useEffect(() => {
    if (!isMock || timerTotal <= 0) return;

    timerIntervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerIntervalRef.current!);
          alert('ĐÃ HẾT GIỜ LÀM BÀI!\nHệ thống tự động nộp bài và tổng kết điểm của bạn.');
          handleFinishExam(true);
          return 0;
        }
        if (prev <= 5) {
          playSfx('tick');
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [isMock, timerTotal, handleFinishExam, playSfx]);

  // Handle single choice option select
  const handleSelectOption = (letter: string) => {
    if (isAnswered || !currentQuestion) return;
    setIsAnswered(true);

    const isCorrect = String(currentQuestion.answer).trim().toUpperCase() === letter.toUpperCase();

    if (isCorrect) {
      playSfx('correct');
    } else {
      playSfx('wrong');
    }

    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: {
        selected: letter,
        correct: isCorrect,
      },
    };
    setAnswers(updatedAnswers);

    // Save in progress background
    if (code) {
      if (isMock && mockExamData) {
        progressService.saveMockExam(code, {
          ...mockExamData,
          answers: updatedAnswers,
        });
      } else if (!mode) {
        progressService.saveExamProgress(code, examNumber, updatedAnswers, false);
      }
    }

    // Flip card to reveal answer
    setTimeout(() => {
      playSfx('flip');
      setIsFlipped(true);
    }, 200);
  };

  // Toggle multi-select option
  const handleToggleMultiOption = (letter: string) => {
    if (isAnswered) return;
    playSfx('click');
    setSelectedMulti((prev) =>
      prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
    );
  };

  // Submit multi-select answer
  const handleSubmitMultiAnswer = () => {
    if (isAnswered || selectedMulti.length === 0 || !currentQuestion) return;
    setIsAnswered(true);

    const userSelected = [...selectedMulti].sort();
    const correctArr = Array.isArray(currentQuestion.answer)
      ? [...currentQuestion.answer].map((a) => a.trim().toUpperCase()).sort()
      : [String(currentQuestion.answer).trim().toUpperCase()];

    const isCorrect =
      userSelected.length === correctArr.length &&
      userSelected.every((val, idx) => val === correctArr[idx]);

    if (isCorrect) {
      playSfx('correct');
    } else {
      playSfx('wrong');
    }

    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: {
        selected: userSelected,
        correct: isCorrect,
      },
    };
    setAnswers(updatedAnswers);

    if (code) {
      if (isMock && mockExamData) {
        progressService.saveMockExam(code, {
          ...mockExamData,
          answers: updatedAnswers,
        });
      } else if (!mode) {
        progressService.saveExamProgress(code, examNumber, updatedAnswers, false);
      }
    }

    setTimeout(() => {
      playSfx('flip');
      setIsFlipped(true);
    }, 200);
  };

  // Next question
  const handleNextQuestion = () => {
    playSfx('click');
    if (currentIndex + 1 < questions.length) {
      setIsFlipped(false);
      setIsAnswered(false);
      setSelectedMulti([]);
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleFinishExam(false);
    }
  };

  // Early submit with confirmation
  const handleEarlySubmit = () => {
    playSfx('click');
    const answeredCount = Object.keys(answers).length;
    const totalCount = questions.length;
    if (
      window.confirm(
        `Bạn đã trả lời ${answeredCount}/${totalCount} câu hỏi.\nBạn có chắc chắn muốn nộp bài sớm không?`
      )
    ) {
      handleFinishExam(false);
    }
  };

  if (!subject || !currentQuestion) return null;

  // Format Timer
  const timerMin = Math.floor(secondsLeft / 60);
  const timerSec = secondsLeft % 60;
  const isTimerWarning = secondsLeft <= 300 && secondsLeft > 60;
  const isTimerDanger = secondsLeft <= 60;

  const currentAnswerRecord = answers[currentQuestion.id];
  const isMulti = Boolean(currentQuestion.multiAnswer);
  const correctArr = Array.isArray(currentQuestion.answer)
    ? currentQuestion.answer.map((a) => a.trim().toUpperCase())
    : [String(currentQuestion.answer).trim().toUpperCase()];

  return (
    <Box
      minH="calc(100vh - 65px)"
      bgImage={`url(${bgMain})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgColor="#183581"
      py={{ base: '20px', md: '32px' }}
      px={{ base: '14px', md: '20px' }}
    >
      <Container maxW="840px">
        {/* Top Progress & Status */}
        <Box mb="20px">
          <Flex justify="space-between" align="center" mb="8px" wrap="wrap" gap="10px">
            <Text fontWeight={800} fontSize={{ base: '14px', md: '16px' }} color="rgba(255, 255, 255, 0.9)">
              {isMock
                ? `${mockExamData?.title || 'Đề thi thử'} • ${subject.code}`
                : `${subject.code} • Bộ đề ${examNumber}`}
              {mode === 'wrong' && ' (Ôn lại câu sai)'}
              {mode === 'correct' && ' (Ôn lại câu đúng)'}
            </Text>

            {/* Mock Countdown Timer */}
            {isMock && (
              <HStack
                bg={
                  isTimerDanger
                    ? 'rgba(239, 68, 68, 0.3)'
                    : isTimerWarning
                    ? 'rgba(245, 158, 11, 0.25)'
                    : 'rgba(0, 0, 0, 0.4)'
                }
                border="1px solid"
                borderColor={
                  isTimerDanger ? '#EF4444' : isTimerWarning ? '#F59E0B' : 'rgba(255, 255, 255, 0.25)'
                }
                px="14px"
                py="4px"
                borderRadius="20px"
                color={isTimerDanger ? '#FCA5A5' : isTimerWarning ? '#FDE68A' : '#D8C4FF'}
                fontWeight={900}
                fontSize="15px"
                sx={{ fontVariantNumeric: 'tabular-nums' }}
              >
                <FiClock size={16} />
                <Text>
                  {String(timerMin).padStart(2, '0')}:{String(timerSec).padStart(2, '0')}
                </Text>
              </HStack>
            )}

            <Text fontWeight={800} fontSize="14px" color="rgba(255, 255, 255, 0.7)">
              Câu {currentIndex + 1} / {questions.length}
            </Text>
          </Flex>

          <Progress
            value={((currentIndex + 1) / questions.length) * 100}
            size="xs"
            borderRadius="6px"
            bg="rgba(255, 255, 255, 0.15)"
            sx={{
              '& > div': {
                bg: 'linear-gradient(90deg, #9F73FF, #98FD1D)',
              },
            }}
          />
        </Box>

        {/* 3D Flashcard Container */}
        <Box
          w="100%"
          minH={`${cardMinHeight}px`}
          height={`${cardMinHeight}px`}
          position="relative"
          sx={{ perspective: '1200px' }}
          mb="28px"
          transition="min-height 0.25s ease, height 0.25s ease"
        >
          <Box
            w="100%"
            h="100%"
            minH={`${cardMinHeight}px`}
            position="relative"
            transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            transform={isFlipped ? 'rotateY(180deg)' : 'none'}
            sx={{ transformStyle: 'preserve-3d' }}
          >
            {/* FRONT FACE */}
            <Box
              ref={frontRef}
              position="absolute"
              inset={0}
              minH="100%"
              bg="rgba(40, 49, 145, 0.92)"
              backdropFilter="blur(20px)"
              border="1px solid rgba(255, 255, 255, 0.22)"
              borderRadius="24px"
              p={{ base: '24px 20px', md: '36px 32px' }}
              display="flex"
              flexDirection="column"
              boxShadow="0 18px 45px rgba(0, 0, 0, 0.4)"
              sx={{ backfaceVisibility: 'hidden' }}
              overflowY="auto"
            >
              <Box ref={frontInnerRef} w="100%">
                <Badge
                  alignSelf="flex-start"
                  bg="rgba(159, 115, 255, 0.25)"
                  color="#FFEE58"
                  border="1px solid rgba(159, 115, 255, 0.4)"
                  px="12px"
                  py="4px"
                  borderRadius="8px"
                  fontSize="13px"
                  fontWeight={800}
                  mb="16px"
                >
                  Câu {currentIndex + 1} {isMulti ? '(Chọn nhiều đáp án)' : ''}
                </Badge>

              <Text
                fontSize={{ base: '17px', md: '20px' }}
                fontWeight={800}
                lineHeight={1.6}
                color="white"
                mb="24px"
              >
                {currentQuestion.question}
              </Text>

              {/* Options list */}
              <VStack spacing="12px" align="stretch" flex={1}>
                {currentQuestion.options.map((opt, idx) => {
                  const letterMatch = opt.match(/^([A-E])\.\s*(.*)$/);
                  const letter = letterMatch ? letterMatch[1] : String.fromCharCode(65 + idx);
                  const optionText = letterMatch ? letterMatch[2] : opt;

                  if (isMulti) {
                    const isSelected = selectedMulti.includes(letter);
                    return (
                      <Box
                        key={letter}
                        onClick={() => handleToggleMultiOption(letter)}
                        cursor={isAnswered ? 'default' : 'pointer'}
                        p="14px 18px"
                        borderRadius="12px"
                        border="1px solid"
                        borderColor={isSelected ? '#98FD1D' : 'rgba(255, 255, 255, 0.16)'}
                        bg={isSelected ? 'rgba(152, 253, 29, 0.2)' : 'rgba(255, 255, 255, 0.06)'}
                        transition="all 0.15s ease"
                        _hover={
                          !isAnswered
                            ? {
                                bg: isSelected ? 'rgba(152, 253, 29, 0.25)' : 'rgba(255, 255, 255, 0.12)',
                                transform: 'translateX(4px)',
                              }
                            : {}
                        }
                      >
                        <HStack spacing="14px" align="flex-start">
                          <Box
                            w="24px"
                            h="24px"
                            borderRadius="6px"
                            border="2px solid"
                            borderColor={isSelected ? '#98FD1D' : 'rgba(255, 255, 255, 0.5)'}
                            bg={isSelected ? '#98FD1D' : 'transparent'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexShrink={0}
                            mt="2px"
                          >
                            {isSelected && <FiCheck color="#183581" size={16} strokeWidth={3} />}
                          </Box>
                          <Text fontSize={{ base: '14.5px', md: '16px' }} fontWeight={700} color="white">
                            <strong>{letter}.</strong> {optionText}
                          </Text>
                        </HStack>
                      </Box>
                    );
                  }

                  // Single choice option button
                  return (
                    <Box
                      key={letter}
                      onClick={() => handleSelectOption(letter)}
                      cursor={isAnswered ? 'default' : 'pointer'}
                      p="14px 18px"
                      borderRadius="12px"
                      border="1px solid rgba(255, 255, 255, 0.16)"
                      bg="rgba(255, 255, 255, 0.06)"
                      transition="all 0.15s ease"
                      _hover={
                        !isAnswered
                          ? {
                              bg: 'rgba(159, 115, 255, 0.22)',
                              borderColor: '#9F73FF',
                              transform: 'translateX(4px)',
                            }
                          : {}
                      }
                      _active={!isAnswered ? { transform: 'scale(0.99)' } : {}}
                    >
                      <Text fontSize={{ base: '14.5px', md: '16px' }} fontWeight={700} color="white">
                        <strong style={{ color: '#FFEE58' }}>{letter}.</strong> {optionText}
                      </Text>
                    </Box>
                  );
                })}
              </VStack>

              {/* Multi Confirm Button inside card */}
              {isMulti && !isAnswered && (
                <Button
                  mt="20px"
                  h="48px"
                  bg="linear-gradient(103.24deg, #98FD1D 0%, #76db00 100%)"
                  color="#183581"
                  fontFamily="'Nunito', sans-serif"
                  fontWeight={900}
                  fontSize="15px"
                  borderRadius="12px"
                  isDisabled={selectedMulti.length === 0}
                  onClick={handleSubmitMultiAnswer}
                  leftIcon={<FiCheck size={18} strokeWidth={3} />}
                  _hover={{ filter: 'brightness(1.1)' }}
                  boxShadow="0 4px 14px rgba(152, 253, 29, 0.4)"
                >
                  {selectedMulti.length > 0
                    ? `Xác nhận đáp án (${selectedMulti.length} đã chọn)`
                    : 'Hãy tích chọn ít nhất 1 đáp án'}
                </Button>
              )}
              </Box>
            </Box>

            {/* BACK FACE (REVEAL ANSWER) */}
            <Box
              ref={backRef}
              position="absolute"
              inset={0}
              minH="100%"
              bg="rgba(30, 38, 120, 0.95)"
              backdropFilter="blur(20px)"
              border="2px solid"
              borderColor={currentAnswerRecord?.correct ? '#98FD1D' : '#FF4249'}
              borderRadius="24px"
              p={{ base: '24px 20px', md: '36px 32px' }}
              display="flex"
              flexDirection="column"
              boxShadow="0 18px 45px rgba(0, 0, 0, 0.4)"
              transform="rotateY(180deg)"
              sx={{ backfaceVisibility: 'hidden' }}
              overflowY="auto"
            >
              <Box ref={backInnerRef} w="100%">
                {/* Result Status Badge */}
              <Flex align="center" gap="10px" mb="16px">
                {currentAnswerRecord?.correct ? (
                  <Badge
                    bg="rgba(152, 253, 29, 0.25)"
                    color="#98FD1D"
                    border="1px solid #98FD1D"
                    px="14px"
                    py="6px"
                    borderRadius="10px"
                    fontSize="15px"
                    fontWeight={900}
                    display="inline-flex"
                    alignItems="center"
                    gap="6px"
                  >
                    <FiCheck size={18} /> Chính xác!
                  </Badge>
                ) : (
                  <Badge
                    bg="rgba(255, 66, 73, 0.25)"
                    color="#FF4249"
                    border="1px solid #FF4249"
                    px="14px"
                    py="6px"
                    borderRadius="10px"
                    fontSize="15px"
                    fontWeight={900}
                    display="inline-flex"
                    alignItems="center"
                    gap="6px"
                  >
                    <FiX size={18} /> Chưa chính xác!
                  </Badge>
                )}
              </Flex>

              <Text fontSize={{ base: '15.5px', md: '17px' }} fontWeight={800} color="white" mb="20px">
                {currentQuestion.question}
              </Text>

              {/* Options Review with highlighting & slightly rounded badges (Hình 1) */}
              <VStack spacing="10px" align="stretch" mb="16px" flex={1}>
                {currentQuestion.options.map((opt, idx) => {
                  const letterMatch = opt.match(/^([A-E])\.\s*(.*)$/);
                  const letter = letterMatch ? letterMatch[1] : String.fromCharCode(65 + idx);
                  const optionText = letterMatch ? letterMatch[2] : opt;

                  const isCorrectAnswer = correctArr.includes(letter);
                  const isUserChoice = Array.isArray(currentAnswerRecord?.selected)
                    ? currentAnswerRecord?.selected.includes(letter)
                    : currentAnswerRecord?.selected === letter;

                  let optBg = 'rgba(255, 255, 255, 0.05)';
                  let optBorder = 'rgba(255, 255, 255, 0.12)';
                  let statusTag = null;

                  if (isCorrectAnswer) {
                    optBg = 'rgba(152, 253, 29, 0.2)';
                    optBorder = '#98FD1D';
                    statusTag = (
                      <Badge
                        bg="#98FD1D"
                        color="#183581"
                        fontSize="11.5px"
                        fontFamily="'Nunito', sans-serif"
                        fontWeight={900}
                        px="10px"
                        py="4px"
                        borderRadius="8px"
                        letterSpacing="0.3px"
                      >
                        ĐÁP ÁN ĐÚNG
                      </Badge>
                    );
                  } else if (isUserChoice && !isCorrectAnswer) {
                    optBg = 'rgba(255, 66, 73, 0.2)';
                    optBorder = '#FF4249';
                    statusTag = (
                      <Badge
                        bg="#FF4249"
                        color="white"
                        fontSize="11.5px"
                        fontFamily="'Nunito', sans-serif"
                        fontWeight={900}
                        px="10px"
                        py="4px"
                        borderRadius="8px"
                        letterSpacing="0.3px"
                      >
                        BẠN ĐÃ CHỌN
                      </Badge>
                    );
                  }

                  return (
                    <Box
                      key={letter}
                      p="12px 16px"
                      borderRadius="12px"
                      bg={optBg}
                      border="1px solid"
                      borderColor={optBorder}
                    >
                      <Flex justify="space-between" align="center">
                        <Text fontSize="14.5px" fontWeight={700} color="white">
                          <strong>{letter}.</strong> {optionText}
                        </Text>
                        {statusTag}
                      </Flex>
                    </Box>
                  );
                })}
              </VStack>

              {/* Note / Explanation if present */}
              {currentQuestion.note && (
                <Box
                  bg="rgba(255, 193, 7, 0.12)"
                  border="1px solid rgba(255, 193, 7, 0.35)"
                  borderRadius="10px"
                  p="12px 16px"
                  mb="16px"
                >
                  <Text fontSize="13px" color="#FFE082" fontWeight={700}>
                    💡 Ghi chú: {currentQuestion.note}
                  </Text>
                </Box>
              )}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Actions - Responsive & Multi-answer friendly (Hình 10) */}
        <Flex justify="space-between" align="center" gap="14px">
          {isMock ? (
            <Button
              variant="outline"
              colorScheme="red"
              borderRadius="12px"
              fontFamily="'Nunito', sans-serif"
              fontWeight={800}
              fontSize="14px"
              onClick={handleEarlySubmit}
              bg="rgba(239, 68, 68, 0.15)"
              borderColor="rgba(239, 68, 68, 0.4)"
              color="#FCA5A5"
              _hover={{ bg: 'rgba(239, 68, 68, 0.25)', color: 'white' }}
            >
              Nộp bài sớm
            </Button>
          ) : (
            <Box />
          )}

          {isMulti && !isAnswered ? (
            <Button
              h="48px"
              px="28px"
              bg="linear-gradient(103.24deg, #98FD1D 0%, #76db00 100%)"
              color="#183581"
              borderRadius="12px"
              fontFamily="'Nunito', sans-serif"
              fontWeight={900}
              fontSize="15px"
              leftIcon={<FiCheck size={18} strokeWidth={3} />}
              isDisabled={selectedMulti.length === 0}
              onClick={handleSubmitMultiAnswer}
              _hover={{ filter: 'brightness(1.1)', transform: 'translateY(-1px)' }}
              _active={{ transform: 'scale(0.98)' }}
              boxShadow="0 4px 14px rgba(152, 253, 29, 0.4)"
            >
              {selectedMulti.length > 0
                ? `Xác nhận đáp án (${selectedMulti.length} đã chọn)`
                : 'Hãy chọn đáp án'}
            </Button>
          ) : (
            <Button
              h="48px"
              px="28px"
              bg="linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)"
              color="white"
              borderRadius="12px"
              fontFamily="'Nunito', sans-serif"
              fontWeight={900}
              fontSize="15px"
              rightIcon={<FiArrowRight size={18} />}
              isDisabled={!isAnswered}
              onClick={handleNextQuestion}
              _hover={{ filter: 'brightness(1.1)', transform: 'translateY(-1px)' }}
              _active={{ transform: 'scale(0.98)' }}
            >
              {currentIndex + 1 === questions.length ? 'Hoàn thành đề' : 'Câu tiếp theo'}
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
