import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled runtime error in Quizlet app:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Center minH="100vh" bg="#183581" color="white" p="20px">
          <Box
            bg="rgba(40, 49, 145, 0.95)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="24px"
            p={{ base: '32px 24px', md: '48px 40px' }}
            maxW="560px"
            w="100%"
            textAlign="center"
            boxShadow="0 20px 50px rgba(0, 0, 0, 0.5)"
          >
            <VStack spacing="18px">
              <Text fontSize="48px">🛡️</Text>
              <Heading fontSize={{ base: '22px', md: '26px' }} fontWeight={900}>
                Đã xảy ra sự cố không mong muốn
              </Heading>
              <Text fontSize="15px" color="rgba(255, 255, 255, 0.8)">
                Dữ liệu ôn tập của bạn đã được bảo toàn an toàn trong hệ thống. Vui lòng quay về trang chủ để tiếp tục.
              </Text>
              <Button
                h="48px"
                px="28px"
                bg="linear-gradient(103.24deg, #98FD1D 0%, #76db00 100%)"
                color="#183581"
                borderRadius="12px"
                fontFamily="'Nunito', sans-serif"
                fontWeight={900}
                fontSize="15px"
                onClick={this.handleReload}
                _hover={{ filter: 'brightness(1.1)' }}
              >
                Quay về trang chủ an toàn
              </Button>
            </VStack>
          </Box>
        </Center>
      );
    }

    return this.props.children;
  }
}
