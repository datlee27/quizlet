import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Badge,
  Progress,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { quizService } from '@services/quizService';
import { progressService } from '@services/progressService';
import { ISubject } from '@interfaces/quiz.interface';
import { useSound } from '@contexts/sound-context';
import bgMain from '@assets/images/bg-main.png';
import { FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const SubjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { playSfx } = useSound();
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [progressMap, setProgressMap] = useState<Record<string, { completed: number; total: number; pct: number }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const subList = await quizService.getSubjects();
      setSubjects(subList);

      const pMap: Record<string, { completed: number; total: number; pct: number }> = {};
      for (const sub of subList) {
        const prog = await progressService.getSubjectProgress(sub.code);
        const completed = Object.values(prog).filter(
          (p) => p.answers && Object.keys(p.answers).length > 0
        ).length;
        const total = sub.totalExams;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        pMap[sub.code] = { completed, total, pct };
      }
      setProgressMap(pMap);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleSelectSubject = (code: string) => {
    playSfx('click');
    progressService.setLastActiveSubject(code);
    navigate(`/subject/${code.toUpperCase()}`);
  };

  return (
    <Box
      minH="calc(100vh - 65px)"
      bgImage={`url(${bgMain})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      bgColor="#183581"
      py={{ base: '28px', md: '48px' }}
      px={{ base: '16px', md: '24px' }}
    >
      <Container maxW="1100px">
        {/* Hero Section */}
        <Center flexDirection="column" textAlign="center" mb={{ base: '32px', md: '48px' }}>
          <Badge
            bg="rgba(159, 115, 255, 0.25)"
            color="#D8C4FF"
            border="1px solid rgba(159, 115, 255, 0.4)"
            px="16px"
            py="6px"
            borderRadius="20px"
            fontSize="13px"
            fontWeight={800}
            letterSpacing="0.5px"
            mb="12px"
          >
            HỆ THỐNG ÔN LUYỆN TRẮC NGHIỆM ĐA MÔN
          </Badge>
          <Heading
            fontSize={{ base: '28px', md: '40px' }}
            fontWeight={900}
            color="white"
            letterSpacing="-0.5px"
            mb="8px"
          >
            Chọn Môn Học
          </Heading>
          <Text color="rgba(255, 255, 255, 0.75)" fontSize={{ base: '14px', md: '16px' }} maxW="560px">
            Lựa chọn học phần cần ôn tập. Hệ thống hỗ trợ luyện flashcard 3D thông minh và thi thử bấm giờ linh hoạt.
          </Text>
        </Center>

        {/* Subjects Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '20px', md: '28px' }}>
          {subjects.map((sub, idx) => {
            const p = progressMap[sub.code] || { completed: 0, total: sub.totalExams, pct: 0 };
            return (
              <motion.div
                key={sub.code}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <Box
                  bg="rgba(40, 49, 145, 0.75)"
                  backdropFilter="blur(16px)"
                  border="1px solid rgba(255, 255, 255, 0.18)"
                  borderRadius="20px"
                  p={{ base: '24px', md: '28px' }}
                  cursor="pointer"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.25s ease"
                  onClick={() => handleSelectSubject(sub.code)}
                  _hover={{
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
                    borderColor: 'rgba(159, 115, 255, 0.6)',
                    bg: 'rgba(40, 49, 145, 0.9)',
                  }}
                >
                {/* Top decorative gradient line */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bg="linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)"
                />

                <Flex justify="space-between" align="flex-start" mb="16px">
                  <Stack spacing="4px">
                    <Flex align="center" gap="10px">
                      <Text
                        fontWeight={900}
                        fontSize={{ base: '24px', md: '28px' }}
                        color="#FFEE58"
                        letterSpacing="-0.5px"
                      >
                        {sub.code}
                      </Text>
                      <Badge
                        bg="rgba(255, 255, 255, 0.15)"
                        color="white"
                        fontSize="12px"
                        fontWeight={700}
                        px="8px"
                        py="3px"
                        borderRadius="6px"
                      >
                        {sub.tag}
                      </Badge>
                    </Flex>
                    <Heading fontSize={{ base: '18px', md: '20px' }} fontWeight={800} color="white">
                      {sub.name}
                    </Heading>
                  </Stack>
                </Flex>

                <Flex align="center" gap="12px" color="rgba(255, 255, 255, 0.75)" fontSize="13.5px" mb="20px">
                  <Text>{sub.totalQuestions} câu hỏi</Text>
                  <Text>•</Text>
                  <Text>{sub.totalExams} bộ đề chuẩn</Text>
                </Flex>

                {/* Progress bar */}
                <Box mb="22px" bg="rgba(0, 0, 0, 0.2)" p="12px 14px" borderRadius="12px">
                  <Flex justify="space-between" fontSize="12.5px" fontWeight={700} color="white" mb="8px">
                    <Text>
                      {p.completed > 0 ? `Đã học ${p.completed}/${p.total} bộ đề` : 'Chưa học đề nào'}
                    </Text>
                    <Text color="#98FD1D">{p.pct}%</Text>
                  </Flex>
                  <Progress
                    value={p.pct}
                    size="sm"
                    borderRadius="6px"
                    bg="rgba(255, 255, 255, 0.15)"
                    sx={{
                      '& > div': {
                        bg: 'linear-gradient(90deg, #9F73FF, #98FD1D)',
                      },
                    }}
                  />
                </Box>

                <Button
                  w="100%"
                  h="44px"
                  bg="linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)"
                  color="white"
                  fontWeight={800}
                  fontSize="14px"
                  borderRadius="10px"
                  leftIcon={<FiBookOpen />}
                  _hover={{
                    filter: 'brightness(1.1)',
                  }}
                  _active={{ transform: 'scale(0.98)' }}
                >
                  Bắt đầu học môn này
                </Button>
              </Box>
            </motion.div>
          );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
