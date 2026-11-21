import React, { useEffect, useState, useCallback } from 'react';
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizService } from '@services/quizService';
import { progressService } from '@services/progressService';
import { ISubject, ISubjectProgress, IMockExam } from '@interfaces/quiz.interface';
import { useSound } from '@contexts/sound-context';
import bgMain from '@assets/images/bg-main.png';
import { FiPlay, FiRotateCcw, FiEye, FiTrash2, FiClock, FiAlertCircle } from 'react-icons/fi';

export const SubjectDashboardPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  const { playSfx } = useSound();

  const [subject, setSubject] = useState<ISubject | null>(null);
  const [progress, setProgress] = useState<ISubjectProgress>({});
  const [mocks, setMocks] = useState<IMockExam[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<number>(45);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    if (!code) return;
    setLoading(true);
    const sub = await quizService.getSubject(code);
    if (!sub) {
      navigate('/');
      return;
    }
    setSubject(sub);

    const [prog, mockList] = await Promise.all([
      progressService.getSubjectProgress(code),
      progressService.getMockExams(code),
    ]);
    setProgress(prog);
    setMocks(mockList);
    setLoading(false);
  }, [code, navigate]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (!subject) return null;

  // Start standard exam
  const handleStartExam = (examNum: number) => {
    playSfx('click');
    navigate(`/quiz/${subject.code}/exam/${examNum}`);
  };

  // View saved results
  const handleViewResult = (examNum: number) => {
    playSfx('click');
    navigate(`/result/${subject.code}/exam/${examNum}`);
  };

  // Restart exam
  const handleRestartExam = async (examNum: number) => {
    playSfx('click');
    await progressService.resetExamProgress(subject.code, examNum);
    await loadData();
    navigate(`/quiz/${subject.code}/exam/${examNum}?fresh=true`);
  };

  // Generate and start mock exam
  const handleStartMockExam = async () => {
    playSfx('click');
    try {
      const nextNum = mocks.length + 1;
      const newMock = await quizService.generateMockExam(subject.code, nextNum, selectedDuration, 50);
      await progressService.saveMockExam(subject.code, newMock);
      navigate(`/quiz/${subject.code}/mock/${newMock.id}`);
    } catch {
      toast({
        title: 'Lỗi',
        description: 'Không thể tạo đề thi thử.',
        status: 'error',
        duration: 3000,
      });
    }
  };

  // Delete mock exam
  const handleDeleteMock = async (mockId: string, title: string) => {
    playSfx('click');
    if (window.confirm(`Bạn có chắc muốn xoá ${title} không?`)) {
      await progressService.deleteMockExam(subject.code, mockId);
      loadData();
    }
  };

  const completedExamsCount = Object.values(progress).filter(
    (p) => p.answers && Object.keys(p.answers).length > 0
  ).length;

  return (
    <Box
      minH="calc(100vh - 65px)"
      bgImage={`url(${bgMain})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgColor="#183581"
      py={{ base: '20px', md: '36px' }}
      px={{ base: '16px', md: '28px' }}
    >
      <Container maxW="1200px">
        {/* Subject Header */}
        <Box
          bg="rgba(40, 49, 145, 0.8)"
          backdropFilter="blur(16px)"
          border="1px solid rgba(255, 255, 255, 0.18)"
          borderRadius="20px"
          p={{ base: '20px', md: '28px' }}
          mb="28px"
        >
          <Flex justify="space-between" align={{ base: 'flex-start', md: 'center' }} direction={{ base: 'column', md: 'row' }} gap="14px">
            <VStack align="flex-start" spacing="6px">
              <HStack spacing="10px">
                <Badge bg="#FFEE58" color="#183581" fontSize="13px" fontWeight={900} px="10px" py="3px" borderRadius="6px">
                  {subject.code}
                </Badge>
                <Badge bg="rgba(255, 255, 255, 0.15)" color="white" fontSize="12px" fontWeight={700} px="8px" py="3px" borderRadius="6px">
                  {subject.tag}
                </Badge>
              </HStack>
              <Heading fontSize={{ base: '22px', md: '28px' }} fontWeight={900} color="white">
                {subject.name}
              </Heading>
              <Text color="rgba(255, 255, 255, 0.75)" fontSize="14px">
                {subject.totalQuestions} câu hỏi • {subject.totalExams} bộ đề ôn tập chuẩn
              </Text>
            </VStack>

            <Badge
              bg="rgba(152, 253, 29, 0.2)"
              color="#98FD1D"
              border="1px solid rgba(152, 253, 29, 0.4)"
              px="14px"
              py="8px"
              borderRadius="12px"
              fontSize="14px"
              fontWeight={800}
            >
              Tiến độ: {completedExamsCount}/{subject.totalExams} đề
            </Badge>
          </Flex>
        </Box>

        {/* Dashboard Tabs */}
        <Tabs variant="unstyled" defaultIndex={0}>
          <TabList gap="12px" mb="24px">
            <Tab
              bg="rgba(255, 255, 255, 0.08)"
              color="white"
              borderRadius="12px"
              px="20px"
              py="10px"
              fontWeight={800}
              fontSize="15px"
              _selected={{
                bg: 'linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(159, 115, 255, 0.4)',
              }}
              _hover={{ bg: 'rgba(255, 255, 255, 0.15)' }}
            >
              Bộ Đề Ôn Tập ({subject.totalExams})
            </Tab>
            <Tab
              bg="rgba(255, 255, 255, 0.08)"
              color="white"
              borderRadius="12px"
              px="20px"
              py="10px"
              fontWeight={800}
              fontSize="15px"
              _selected={{
                bg: 'linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(159, 115, 255, 0.4)',
              }}
              _hover={{ bg: 'rgba(255, 255, 255, 0.15)' }}
            >
              Thi Thử ({mocks.length})
            </Tab>
          </TabList>

          <TabPanels>
            {/* Tab 1: Bộ Đề Ôn Tập */}
            <TabPanel p={0}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="20px">
                {Array.from({ length: subject.totalExams }, (_, i) => i + 1).map((examNum) => {
                  const p = progress[examNum];
                  const isDone = !!(p && p.isCompleted);
                  const answeredCount = p && p.answers ? Object.keys(p.answers).length : 0;
                  const isDoing = !isDone && answeredCount > 0;
                  const score = p ? p.score : 0;
                  const totalQ = p ? p.total : 50;
                  const pct = totalQ > 0 && isDone ? Math.round((score / totalQ) * 100) : 0;

                  return (
                    <Box
                      key={examNum}
                      bg="rgba(40, 49, 145, 0.75)"
                      backdropFilter="blur(14px)"
                      border="1px solid"
                      borderColor={isDone ? 'rgba(152, 253, 29, 0.4)' : 'rgba(255, 255, 255, 0.16)'}
                      borderRadius="16px"
                      p="20px"
                      position="relative"
                      transition="all 0.2s ease"
                      _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35)',
                        borderColor: '#9F73FF',
                      }}
                    >
                      <Flex justify="space-between" align="center" mb="12px">
                        <Badge bg="rgba(255, 255, 255, 0.15)" color="white" fontSize="13px" fontWeight={800} px="8px" py="2px" borderRadius="6px">
                          #{examNum}
                        </Badge>
                        <Badge
                          bg={
                            isDone
                              ? 'rgba(152, 253, 29, 0.2)'
                              : isDoing
                              ? 'rgba(255, 193, 7, 0.2)'
                              : 'rgba(255, 255, 255, 0.1)'
                          }
                          color={isDone ? '#98FD1D' : isDoing ? '#FFD54F' : 'rgba(255, 255, 255, 0.6)'}
                          fontSize="11.5px"
                          fontWeight={700}
                          px="8px"
                          py="3px"
                          borderRadius="6px"
                        >
                          {isDone ? `Hoàn thành (${score}/${totalQ})` : isDoing ? `Đang học (${answeredCount}/${totalQ})` : 'Chưa học'}
                        </Badge>
                      </Flex>

                      <Heading fontSize="17px" fontWeight={800} color="white" mb="8px">
                        Bộ đề {examNum}
                      </Heading>
                      <Text fontSize="13px" color="rgba(255, 255, 255, 0.7)" mb="14px">
                        50 câu hỏi trắc nghiệm
                      </Text>

                      {/* Progress bar */}
                      <Box mb="18px" bg="rgba(0, 0, 0, 0.2)" p="10px 12px" borderRadius="10px">
                        <Flex justify="space-between" fontSize="12px" fontWeight={700} color="white" mb="6px">
                          <Text>{isDone ? `Đúng: ${score}/${totalQ}` : isDoing ? `Tiến độ: ${answeredCount}/${totalQ}` : '0%'}</Text>
                          <Text color="#98FD1D">{isDone ? `${pct}%` : ''}</Text>
                        </Flex>
                        <Progress
                          value={isDone ? pct : (answeredCount / totalQ) * 100}
                          size="xs"
                          borderRadius="4px"
                          bg="rgba(255, 255, 255, 0.15)"
                          sx={{
                            '& > div': {
                              bg: isDone ? '#98FD1D' : '#9F73FF',
                            },
                          }}
                        />
                      </Box>

                      {/* Action buttons */}
                      <HStack spacing="10px">
                        {isDone ? (
                          <>
                            <Button
                              flex={1}
                              h="38px"
                              fontFamily="'Nunito', sans-serif"
                              fontSize="13px"
                              bg="rgba(159, 115, 255, 0.25)"
                              color="white"
                              border="1px solid rgba(159, 115, 255, 0.4)"
                              borderRadius="10px"
                              fontWeight={800}
                              leftIcon={<FiEye />}
                              onClick={() => handleViewResult(examNum)}
                              _hover={{ bg: 'rgba(159, 115, 255, 0.4)' }}
                            >
                              Xem lại
                            </Button>
                            <Button
                              flex={1}
                              h="38px"
                              fontFamily="'Nunito', sans-serif"
                              fontSize="13px"
                              bg="rgba(255, 255, 255, 0.12)"
                              color="white"
                              border="1px solid rgba(255, 255, 255, 0.25)"
                              borderRadius="10px"
                              fontWeight={800}
                              leftIcon={<FiRotateCcw />}
                              onClick={() => handleRestartExam(examNum)}
                              _hover={{ bg: 'rgba(255, 255, 255, 0.22)' }}
                              title="Làm lại từ đầu"
                            >
                              Làm lại
                            </Button>
                          </>
                        ) : (
                          <Button
                            w="100%"
                            h="38px"
                            fontFamily="'Nunito', sans-serif"
                            fontSize="13.5px"
                            bg="linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)"
                            color="white"
                            borderRadius="10px"
                            fontWeight={800}
                            leftIcon={<FiPlay />}
                            onClick={() => handleStartExam(examNum)}
                            _hover={{ filter: 'brightness(1.1)' }}
                          >
                            {isDoing ? 'Tiếp tục làm bài' : 'Bắt đầu học'}
                          </Button>
                        )}
                      </HStack>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </TabPanel>

            {/* Tab 2: Thi Thử */}
            <TabPanel p={0}>
              {/* Mock Exam Generator Card */}
              <Box
                bg="linear-gradient(135deg, rgba(159, 115, 255, 0.2) 0%, rgba(40, 49, 145, 0.9) 100%)"
                border="1px solid rgba(159, 115, 255, 0.4)"
                borderRadius="20px"
                p={{ base: '22px', md: '30px' }}
                mb="32px"
              >
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'flex-start', md: 'center' }} gap="20px">
                  <VStack align="flex-start" spacing="8px" flex={1}>
                    <Heading fontSize={{ base: '18px', md: '22px' }} fontWeight={900} color="white">
                      Tạo Đề Thi Thử Mới
                    </Heading>
                    <Text fontSize="14px" color="rgba(255, 255, 255, 0.8)">
                      Hệ thống tự động chọn ngẫu nhiên 50 câu hỏi từ toàn bộ ngân hàng câu hỏi của môn này.
                    </Text>

                    {/* Duration Picker (No emojis as requested) */}
                    <Box pt="10px">
                      <Text fontSize="13px" fontWeight={800} color="rgba(255, 255, 255, 0.9)" mb="8px">
                        Thời gian thi:
                      </Text>
                      <HStack spacing="10px" wrap="wrap">
                        {[
                          { minutes: 30, label: '30 phút (Tryhard)' },
                          { minutes: 45, label: '45 phút (Tiêu chuẩn)' },
                          { minutes: 50, label: '50 phút (Thoải mái)' },
                        ].map((d) => (
                          <Button
                            key={d.minutes}
                            size="sm"
                            borderRadius="20px"
                            fontWeight={700}
                            fontSize="13px"
                            bg={selectedDuration === d.minutes ? '#8954FF' : 'rgba(255, 255, 255, 0.1)'}
                            color="white"
                            border="1px solid"
                            borderColor={selectedDuration === d.minutes ? '#B088FF' : 'rgba(255, 255, 255, 0.2)'}
                            boxShadow={selectedDuration === d.minutes ? '0 0 14px rgba(137, 84, 255, 0.5)' : 'none'}
                            onClick={() => {
                              playSfx('click');
                              setSelectedDuration(d.minutes);
                            }}
                            _hover={{
                              bg: selectedDuration === d.minutes ? '#8954FF' : 'rgba(255, 255, 255, 0.2)',
                            }}
                          >
                            {d.label}
                          </Button>
                        ))}
                      </HStack>
                    </Box>
                  </VStack>

                  <Button
                    h="52px"
                    px="32px"
                    bg="linear-gradient(103.24deg, #98FD1D 0%, #76db00 100%)"
                    color="#183581"
                    fontWeight={900}
                    fontSize="16px"
                    borderRadius="12px"
                    leftIcon={<FiPlay size={20} />}
                    onClick={handleStartMockExam}
                    _hover={{ filter: 'brightness(1.1)', transform: 'translateY(-2px)' }}
                    _active={{ transform: 'scale(0.98)' }}
                    boxShadow="0 6px 20px rgba(152, 253, 29, 0.4)"
                  >
                    Bắt đầu thi thử
                  </Button>
                </Flex>
              </Box>

              {/* Mock History */}
              <Box>
                <Heading fontSize="18px" fontWeight={800} color="white" mb="16px">
                  Lịch sử đề đã thi ({mocks.length})
                </Heading>

                {mocks.length === 0 ? (
                  <Box
                    bg="rgba(0, 0, 0, 0.2)"
                    border="1px dashed rgba(255, 255, 255, 0.2)"
                    borderRadius="14px"
                    p="36px"
                    textAlign="center"
                  >
                    <Text color="rgba(255, 255, 255, 0.6)" fontSize="15px">
                      Bạn chưa thi thử đề nào. Hãy chọn thời gian và bấm "Bắt đầu thi thử" ở trên!
                    </Text>
                  </Box>
                ) : (
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
                    {mocks.map((mock) => {
                      const count = mock.questions.length;
                      const score = mock.lastScore || 0;
                      const pct = count > 0 ? Math.round((score / count) * 100) : 0;
                      const isCompleted = mock.isCompleted;
                      const answered = Object.keys(mock.answers || {}).length;

                      return (
                        <Box
                          key={mock.id}
                          bg="rgba(40, 49, 145, 0.7)"
                          border="1px solid rgba(255, 255, 255, 0.16)"
                          borderRadius="16px"
                          p="20px"
                          transition="all 0.2s ease"
                          _hover={{ borderColor: '#9F73FF' }}
                        >
                          <Flex justify="space-between" align="center" mb="10px">
                            <Text fontWeight={800} fontSize="16px" color="white">
                              {mock.title}
                            </Text>
                            <Badge
                              bg={isCompleted ? 'rgba(152, 253, 29, 0.2)' : 'rgba(255, 193, 7, 0.2)'}
                              color={isCompleted ? '#98FD1D' : '#FFD54F'}
                              fontSize="11.5px"
                              fontWeight={700}
                              px="8px"
                              py="2px"
                              borderRadius="6px"
                            >
                              {isCompleted ? `Đã nộp bài (${score}/${count})` : `Đang làm (${answered}/${count})`}
                            </Badge>
                          </Flex>

                          <HStack spacing="12px" color="rgba(255, 255, 255, 0.65)" fontSize="13px" mb="14px">
                            <HStack spacing="4px">
                              <FiClock size={14} />
                              <Text>{mock.durationMinutes || 45} phút</Text>
                            </HStack>
                            <Text>•</Text>
                            <Text>{new Date(mock.createdAt).toLocaleDateString('vi-VN')}</Text>
                          </HStack>

                          {/* Progress */}
                          <Box mb="16px" bg="rgba(0, 0, 0, 0.2)" p="10px 12px" borderRadius="10px">
                            <Flex justify="space-between" fontSize="12px" fontWeight={700} color="white" mb="6px">
                              <Text>Điểm: {score}/{count}</Text>
                              <Text color="#98FD1D">{pct}%</Text>
                            </Flex>
                            <Progress
                              value={pct}
                              size="xs"
                              borderRadius="4px"
                              bg="rgba(255, 255, 255, 0.15)"
                              sx={{
                                '& > div': {
                                  bg: isCompleted ? '#98FD1D' : '#9F73FF',
                                },
                              }}
                            />
                          </Box>

                          <HStack spacing="10px">
                            <Button
                              flex={1}
                              h="38px"
                              fontFamily="'Nunito', sans-serif"
                              fontSize="13px"
                              bg="rgba(159, 115, 255, 0.25)"
                              color="white"
                              border="1px solid rgba(159, 115, 255, 0.4)"
                              borderRadius="10px"
                              fontWeight={800}
                              leftIcon={<FiEye />}
                              onClick={() => {
                                playSfx('click');
                                navigate(`/result/${subject.code}/mock/${mock.id}`);
                              }}
                              _hover={{ bg: 'rgba(159, 115, 255, 0.4)' }}
                            >
                              Xem lại
                            </Button>
                            <Button
                              flex={1}
                              h="38px"
                              fontFamily="'Nunito', sans-serif"
                              fontSize="13px"
                              bg="rgba(255, 255, 255, 0.12)"
                              color="white"
                              border="1px solid rgba(255, 255, 255, 0.25)"
                              borderRadius="10px"
                              fontWeight={800}
                              leftIcon={<FiRotateCcw />}
                              onClick={() => {
                                playSfx('click');
                                navigate(`/quiz/${subject.code}/mock/${mock.id}`);
                              }}
                              _hover={{ bg: 'rgba(255, 255, 255, 0.22)' }}
                              title="Làm lại đề này"
                            >
                              Làm lại
                            </Button>
                            <Button
                              w="38px"
                              h="38px"
                              flexShrink={0}
                              p={0}
                              borderRadius="10px"
                              bg="rgba(255, 66, 73, 0.15)"
                              border="1px solid rgba(255, 66, 73, 0.35)"
                              color="#FF8A8E"
                              onClick={() => handleDeleteMock(mock.id, mock.title)}
                              _hover={{ bg: 'rgba(255, 66, 73, 0.3)', color: 'white' }}
                              title="Xoá đề"
                            >
                              <FiTrash2 size={16} />
                            </Button>
                          </HStack>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                )}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
