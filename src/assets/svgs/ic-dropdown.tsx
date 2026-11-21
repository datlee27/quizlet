import { Box } from "@chakra-ui/react";

interface DropdownIconProps {
  isOpen: boolean;
  color?: string;
}

export const DropdownIcon = ({ isOpen, color = "#3D59D6" }: DropdownIconProps) => (
  <Box
    as="svg"
    width={{ base: "20px", md: "26px" }}
    height={{ base: "20px", md: "26px" }}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
    transition="transform 0.2s"
    cursor="pointer"
  >
    <path
      d="M9.97605 22.8368C11.2069 25.1001 14.393 25.1001 15.6239 22.8368L23.0554 9.17064C24.2517 6.97089 22.6947 4.26758 20.2315 4.26758L5.36839 4.26758C2.90523 4.26758 1.34826 6.97088 2.54448 9.17063L9.97605 22.8368Z"
      fill={color}
    />
  </Box>
);