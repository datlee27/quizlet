import { Box } from "@chakra-ui/react";

const IcSaveFile = (props: React.ComponentProps<typeof Box>) => {
  return (
    <Box {...props} display="flex" alignItems="center" justifyContent="center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_11203)">
          <path
            d="M28.3333 5H8.33333C6.49167 5 5 6.49167 5 8.33333V31.6667C5 33.5083 6.49167 35 8.33333 35H31.6667C33.5083 35 35 33.5083 35 31.6667V11.6667L28.3333 5ZM20 31.6667C17.2417 31.6667 15 29.425 15 26.6667C15 23.9083 17.2417 21.6667 20 21.6667C22.7583 21.6667 25 23.9083 25 26.6667C25 29.425 22.7583 31.6667 20 31.6667ZM25 15H8.33333V8.33333H25V15Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_11203">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};

export default IcSaveFile;
