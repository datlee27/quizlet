import { Box } from "@chakra-ui/react";

const IcUser = () => {
  return (
    <Box
      width={{ md: "4rem", base: "3.3rem" }}
      height={{ md: "4rem", base: "3.3rem" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* shadow */}
          <filter id="hexShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="2"
              floodColor="rgba(0,0,0,0.25)"
            />
          </filter>

          {/* highlight nhẹ phía trên */}
          <linearGradient id="hexHighlight" x1="0" y1="0" x2="0" y2="72">
            <stop offset="0" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="0.5" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* LỤC GIÁC XANH */}
        <g filter="url(#hexShadow)">
          <path
            d="
              M36 4
              L62 20
              L62 46
              L36 62
              L10 46
              L10 20
              Z
            "
            fill="#3B5BDB"   /* xanh chủ đạo */
          />
          <path
            d="
              M36 4
              L62 20
              L62 46
              L36 62
              L10 46
              L10 20
              Z
            "
            stroke="url(#hexHighlight)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </g>

        {/* ICON USER – MÀU TRẮNG */}
        <g transform="translate(16,16) scale(1)">
          <path
            d="M19.9997 3.33398C15.633 3.33398 12.083 6.88398 12.083 11.2507C12.083 15.534 15.433 19.0007 19.7997 19.1507H20.283C24.5497 19.0007 27.8997 15.534 27.9163 11.2507C27.9163 6.88398 24.3663 3.33398 19.9997 3.33398Z"
            fill="#FFFFFF"
          />
          <path
            d="M28.4666 23.5828C23.8166 20.4828 16.2333 20.4828 11.5499 23.5828C9.43327 24.9995 8.2666 26.9161 8.2666 28.9661C8.2666 31.0161 9.43327 32.9161 11.5333 34.3161C13.8666 35.8828 16.9333 36.6661 19.9999 36.6661C23.0666 36.6661 26.1333 35.8828 28.4666 34.3161C30.5666 32.8995 31.7333 30.9995 31.7333 28.9328C31.7166 26.8828 30.5666 24.9828 28.4666 23.5828Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </Box>
  );
};

export default IcUser;
