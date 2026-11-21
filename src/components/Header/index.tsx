import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  Image,
  Text,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Portal,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSound } from '@contexts/sound-context';
import { SUBJECTS_CONFIG } from '../../data';
import logo from '@assets/images/logo.png';
import IcSetting from '@assets/svgs/ic-setting';
import { FiArrowLeft, FiGrid, FiChevronDown, FiBookOpen } from 'react-icons/fi';

interface HeaderProps {
  onOpenSettings: () => void;
  headerStats?: string;
  backText?: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSettings,
  headerStats,
  backText,
  onBack,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { playSfx } = useSound();

  const isHome = location.pathname === '/';

  const handleDefaultBack = () => {
    playSfx('click');
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleGoHome = () => {
    playSfx('click');
    navigate('/');
  };

  const handleSwitchSubject = (code: string) => {
    playSfx('click');
    navigate(`/subject/${code}`);
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="rgba(24, 53, 129, 0.85)"
      backdropFilter="blur(16px)"
      borderBottom="1px solid rgba(255, 255, 255, 0.12)"
      px={{ base: '16px', md: '32px' }}
      py="12px"
    >
      <Flex maxW="1280px" mx="auto" align="center" justify="space-between">
        {/* Left: Back button and Logo */}
        <HStack spacing="14px">
          {!isHome && (
            <Button
              size="sm"
              variant="outline"
              colorScheme="purple"
              leftIcon={<FiArrowLeft />}
              onClick={handleDefaultBack}
              borderRadius="10px"
              bg="rgba(255, 255, 255, 0.1)"
              color="white"
              border="1px solid rgba(255, 255, 255, 0.2)"
              _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
            >
              {backText || 'Quay lại'}
            </Button>
          )}

          <HStack
            spacing="10px"
            cursor="pointer"
            onClick={handleGoHome}
            _hover={{ opacity: 0.9 }}
          >
            <Image src={logo} alt="Quizlet" h={{ base: '32px', md: '38px' }} />
            <Text
              fontWeight={900}
              fontSize={{ base: '18px', md: '22px' }}
              letterSpacing="-0.5px"
              color="white"
            >
              Quizlet
            </Text>
          </HStack>
        </HStack>

        {/* Right: Actions, Stats, Quick Switcher, Settings */}
        <HStack spacing={{ base: '8px', md: '14px' }}>
          {headerStats && (
            <Badge
              bg="rgba(159, 115, 255, 0.25)"
              color="#D8C4FF"
              border="1px solid rgba(159, 115, 255, 0.5)"
              px="12px"
              py="6px"
              borderRadius="12px"
              fontSize={{ base: '11px', md: '13px' }}
              fontWeight={700}
            >
              {headerStats}
            </Badge>
          )}

          {!isHome && (
            <Menu>
              <MenuButton
                as={Button}
                size="sm"
                leftIcon={<FiGrid />}
                rightIcon={<FiChevronDown />}
                bg="rgba(255, 255, 255, 0.1)"
                color="white"
                borderRadius="10px"
                fontSize="13px"
                fontWeight={700}
                _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
                _active={{ bg: 'rgba(255, 255, 255, 0.25)' }}
                display={{ base: 'none', sm: 'inline-flex' }}
              >
                Đổi môn học
              </MenuButton>
              <Portal>
                <MenuList
                  bg="#283191"
                  borderColor="rgba(255, 255, 255, 0.18)"
                  borderRadius="14px"
                  boxShadow="0 14px 36px rgba(0, 0, 0, 0.5)"
                  p="8px"
                  zIndex={200}
                >
                  {SUBJECTS_CONFIG.map((s) => (
                    <MenuItem
                      key={s.code}
                      onClick={() => handleSwitchSubject(s.code)}
                      bg="transparent"
                      color="white"
                      borderRadius="8px"
                      py="8px"
                      px="12px"
                      _hover={{ bg: 'rgba(159, 115, 255, 0.3)' }}
                    >
                      <HStack spacing="10px">
                        <Badge bg="#FFEE58" color="#183581" fontSize="11px" fontWeight={900}>
                          {s.code}
                        </Badge>
                        <Text fontSize="13px" fontWeight={700}>
                          {s.name}
                        </Text>
                      </HStack>
                    </MenuItem>
                  ))}
                  <MenuDivider borderColor="rgba(255, 255, 255, 0.15)" />
                  <MenuItem
                    onClick={handleGoHome}
                    bg="transparent"
                    color="#D8C4FF"
                    borderRadius="8px"
                    py="8px"
                    px="12px"
                    _hover={{ bg: 'rgba(159, 115, 255, 0.3)' }}
                  >
                    <HStack spacing="8px">
                      <FiBookOpen size={14} />
                      <Text fontSize="13px" fontWeight={800}>
                        Xem tất cả môn học
                      </Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          )}

          {/* Settings Button */}
          <Button
            size="sm"
            onClick={() => {
              playSfx('click');
              onOpenSettings();
            }}
            bg="#EAEAEA"
            color="#283191"
            w={{ base: '38px', md: '44px' }}
            h={{ base: '38px', md: '44px' }}
            p={0}
            borderRadius="10px"
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.25)"
            _hover={{ bg: '#FFFFFF', transform: 'translateY(-1px)' }}
            _active={{ transform: 'scale(0.96)' }}
            title="Cài đặt âm thanh"
          >
            <IcSetting />
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
