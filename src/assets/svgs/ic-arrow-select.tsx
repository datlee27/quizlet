import { Box } from "@chakra-ui/react";

const IcArrowSelect = (props: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      {...props} 
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <svg
        width="100%"   /* Thay đổi để co giãn theo Box */
        height="100%"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.84275 18.5692C9.0736 20.8325 12.2597 20.8325 13.4906 18.5692L20.9221 4.90306C22.1184 2.70331 20.5614 8.98767e-07 18.0982 7.91099e-07L3.23509 1.4141e-07C0.771925 3.37419e-08 -0.785046 2.70331 0.411178 4.90305L7.84275 18.5692Z"
          fill="currentColor" /* Để có thể đổi màu icon bằng thuộc tính color của Select */
        />
      </svg>
    </Box>
  );
};

export default IcArrowSelect;
