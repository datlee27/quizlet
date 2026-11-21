import { Box } from "@chakra-ui/react";

const IcShuffle = (props: React.ComponentProps<typeof Box>) => {
  return (
    <Box {...props} display="flex" alignItems="center" justifyContent="center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.285 3H11.715C6.255 3 3 6.255 3 11.715V24.27C3 29.745 6.255 33 11.715 33H24.27C29.73 33 32.985 29.745 32.985 24.285V11.715C33 6.255 29.745 3 24.285 3ZM26.295 11.295L14.715 22.875H19.245C19.86 22.875 20.37 23.385 20.37 24C20.37 24.615 19.86 25.125 19.245 25.125H12C11.385 25.125 10.875 24.615 10.875 24V16.755C10.875 16.14 11.385 15.63 12 15.63C12.615 15.63 13.125 16.14 13.125 16.755V21.285L24.705 9.705C24.93 9.48 25.215 9.375 25.5 9.375C25.785 9.375 26.07 9.48 26.295 9.705C26.73 10.14 26.73 10.86 26.295 11.295Z"
          fill="#3D59D6"
        />
      </svg>
    </Box>
  );
};

export default IcShuffle;
