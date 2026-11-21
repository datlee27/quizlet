import React, { useEffect, useCallback } from 'react';
import { Button, Image, Stack, Text, Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import confetti from 'canvas-confetti';
import celebrationImg from '@assets/images/SP_Celebration.png';
import { useSound } from '@contexts/sound-context';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  scoreText?: string;
}

// Animation keyframes ported directly from Olympia (_reference_ui)
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

/**
 * 8-cannon multi-angle celebration confetti sequence from Olympia
 */
export const fireCelebrationConfetti = () => {
  const makeShot = (particleRatio: number, opts: confetti.Options) => {
    confetti({
      ...opts,
      particleCount: Math.floor(220 * particleRatio),
    });
  };

  // Fire from left side (x: 0.1)
  makeShot(0.25, {
    spread: 60,
    startVelocity: 55,
    origin: { x: 0.1, y: 0.6 },
    angle: 60,
    colors: ['#9F73FF', '#98FD1D', '#FFEE58', '#60B1F3', '#FF4249'],
  });

  makeShot(0.2, {
    spread: 50,
    startVelocity: 45,
    origin: { x: 0.1, y: 0.7 },
    angle: 70,
    colors: ['#98FD1D', '#FFEE58', '#9F73FF'],
  });

  // Fire from center-left (x: 0.3)
  makeShot(0.3, {
    spread: 80,
    startVelocity: 60,
    origin: { x: 0.3, y: 0.6 },
    angle: 75,
    colors: ['#60B1F3', '#98FD1D', '#FF4249'],
  });

  // Fire from center (x: 0.5)
  makeShot(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.85,
    origin: { x: 0.5, y: 0.7 },
    angle: 90,
    colors: ['#9F73FF', '#98FD1D', '#FFEE58', '#FF4249'],
  });

  makeShot(0.2, {
    spread: 120,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.6 },
    angle: 90,
    colors: ['#98FD1D', '#FFEE58', '#60B1F3'],
  });

  // Fire from center-right (x: 0.7)
  makeShot(0.3, {
    spread: 80,
    startVelocity: 60,
    origin: { x: 0.7, y: 0.6 },
    angle: 105,
    colors: ['#60B1F3', '#9F73FF', '#FFEE58'],
  });

  // Fire from right side (x: 0.9)
  makeShot(0.25, {
    spread: 60,
    startVelocity: 55,
    origin: { x: 0.9, y: 0.6 },
    angle: 120,
    colors: ['#98FD1D', '#FF4249', '#60B1F3'],
  });

  makeShot(0.2, {
    spread: 50,
    startVelocity: 45,
    origin: { x: 0.9, y: 0.7 },
    angle: 110,
    colors: ['#9F73FF', '#FFEE58', '#98FD1D'],
  });
};

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  isOpen,
  onClose,
  title = 'CHÚC MỪNG BẠN HOÀN THÀNH BÀI THI',
  subtitle,
  scoreText,
}) => {
  const { playSfx } = useSound();

  const handleClose = useCallback(() => {
    playSfx('click');
    onClose();
  }, [onClose, playSfx]);

  useEffect(() => {
    if (isOpen) {
      playSfx('complete');
      fireCelebrationConfetti();
      const interval1 = setTimeout(() => fireCelebrationConfetti(), 600);
      const interval2 = setTimeout(() => fireCelebrationConfetti(), 1400);

      // Auto close after 12 seconds
      const autoCloseTimer = setTimeout(() => {
        onClose();
      }, 12000);

      return () => {
        clearTimeout(interval1);
        clearTimeout(interval2);
        clearTimeout(autoCloseTimer);
      };
    }
  }, [isOpen, onClose, playSfx]);

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      width="100vw"
      height="100vh"
      bg="rgba(0, 0, 0, 0.78)"
      backdropFilter="blur(10px)"
      zIndex={9999}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={handleClose}
      animation={`${fadeIn} 0.3s ease-in-out`}
      overflow="hidden"
      p="20px"
    >
      <Stack
        direction="column"
        align="center"
        spacing="20px"
        maxW="800px"
        w="100%"
        onClick={(e) => e.stopPropagation()}
        animation={`${scaleIn} 0.5s ease-out`}
        position="relative"
        zIndex={1}
      >
        <Image
          src={celebrationImg}
          alt="Celebration"
          w={{ base: '240px', sm: '340px', md: '440px' }}
          h="auto"
          objectFit="contain"
          animation={`${bounce} 2s ease-in-out infinite`}
          filter="drop-shadow(0 10px 30px rgba(255, 215, 0, 0.45))"
        />

        <Text
          fontFamily="'Nunito', sans-serif"
          fontSize={{ base: '22px', sm: '28px', md: '36px' }}
          fontWeight={900}
          color="#FFFFFF"
          textAlign="center"
          textTransform="uppercase"
          textShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
          animation={`${scaleIn} 0.6s ease-out 0.2s backwards`}
          letterSpacing="-0.5px"
          px="16px"
        >
          {title}
        </Text>

        {scoreText && (
          <Text
            fontFamily="'Nunito', sans-serif"
            fontSize={{ base: '18px', md: '24px' }}
            fontWeight={900}
            color="#98FD1D"
            textShadow="0 2px 10px rgba(152, 253, 29, 0.5)"
          >
            {scoreText}
          </Text>
        )}

        {subtitle && (
          <Text
            fontFamily="'Nunito', sans-serif"
            fontSize={{ base: '14px', md: '16px' }}
            fontWeight={700}
            color="rgba(255, 255, 255, 0.85)"
            textAlign="center"
            maxW="500px"
          >
            {subtitle}
          </Text>
        )}

        <Button
          onClick={handleClose}
          w="100%"
          maxW="260px"
          h={{ base: '48px', md: '56px' }}
          borderRadius="14px"
          boxShadow="0px 6px 16px rgba(0, 0, 0, 0.35)"
          fontWeight={900}
          fontSize={{ base: '15px', md: '17px' }}
          bg="linear-gradient(103.24deg, #98FD1D 0%, #76db00 100%)"
          color="#183581"
          fontFamily="'Nunito', sans-serif"
          _hover={{
            filter: 'brightness(1.1)',
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 20px rgba(152, 253, 29, 0.45)',
          }}
          _active={{
            transform: 'scale(0.98)',
          }}
          transition="all 0.2s ease"
          animation={`${scaleIn} 0.7s ease-out 0.3s backwards`}
        >
          Xem kết quả chi tiết
        </Button>
      </Stack>
    </Box>
  );
};

export default CelebrationModal;
