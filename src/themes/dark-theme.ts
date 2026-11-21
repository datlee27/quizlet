import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {};

const colors = {
  bg: {
    main: "#fff",
  },
  text: {
    main: "#000",
  },
  font: {
    nunito: `"Nunito", sans-serif`,
  },
  // Brand colors
  brand: {
    primary: "#9F73FF",    // Main purple
    secondary: "#60B1F3",  // Blue
    tertiary: "#408E92",   // Teal
    accent: "#F9B82E",     // Yellow/Orange
    white: "#fff",         // White
  },
  // Student exam colors
  exam: {
    card: "#3D59D6",       // Card background blue
    navy: "#183581",       // Navy background
    navyDark: "#223C7D",   // Dark navy
    blue: "#3E4987",       // Blue background
    purpleDark: "#8954FF", // Dark purple
    success: "#98FD1D",    // Green success
    error: "#FF4249",      // Red error
    gray: "#3E455D",       // Gray blue
    grayLight: "#B0B6CF",  // Light gray blue
    grayVeryLight: "#E9E9E9", // Very light gray
    grayHover: "#D0D0D0",  // Gray hover
    textDark: "#3B3E4B",   // Dark text
    textGray: "#4A5568",   // Gray text
    answerOrange: "#FFC187", // Answer gradient start
    answerOrangeEnd: "#FDB777", // Answer gradient end
  },
  // Gradients
  gradients: {
    primary: "linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)",
    answerSelected: "linear-gradient(to right, #FFC187, #FDB777)",
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
  nunito: `"Nunito", sans-serif`,
  outfit: `"Outfit", sans-serif`,
};

const ButtonStyle = {
  width: "auto",
  height: "4.8rem",
  fontFamily: "Outfit",
  fontSize: "1.6rem",
  fontWeight: "400",
  overflow: "hidden",
  borderRadius: ".8rem",
};

const components = {
  Button: {
    variants: {
      solid: (props: {
        colorScheme: string;
        width?: string;
        height?: string;
        color?: string;
      }) => ({
        ...ButtonStyle,
        width: props.width || ButtonStyle.width,
        height: props.height || ButtonStyle.height,
        bg: `brand.${props.colorScheme}`,
        color: "white",
        border: `1px solid brand.${props.colorScheme}`,
        transition: "all 0.3s ease-in-out",

        _hover: {
          color: "#BEC2CA",
          background: "white",
          border: "1px solid #BEC2CA",
        },
      }),
      outline: (props: {
        colorScheme: string;
        width?: string;
        height?: string;
        color?: string;
        borderColor?: string;
      }) => ({
        ...ButtonStyle,
        width: props.width || ButtonStyle.width,
        height: props.height || ButtonStyle.height,
        bg: "white",
        color: `brand.${props.colorScheme}`,
        border: `1px solid brand.${props.colorScheme}`,
        transition: "all 0.3s ease-in-out",

        _hover: {
          color: "white",
          bg: `brand.${props.colorScheme}`,
          border: `1px solid brand.${props.colorScheme}`,
        },
      }),
      // Custom variants for specific use cases
      primary: {
        ...ButtonStyle,
        bg: "brand.primary",
        color: "white",
        border: "1px solid brand.primary",
        transition: "all 0.3s ease-in-out",
        _active: {
          transform: "scale(.9)",
        },
        _hover: {
          color: "#BEC2CA",
          background: "white",
          border: "1px solid #BEC2CA",
        },
      },
      secondary: {
        ...ButtonStyle,
        bg: "brand.secondary",
        color: "white",
        border: "1px solid brand.secondary",
        transition: "all 0.3s ease-in-out",
        _active: {
          transform: "scale(.9)",
        },
        _hover: {
          color: "#BEC2CA",
          background: "white",
          border: "1px solid #BEC2CA",
        },
      },
      tertiary: {
        ...ButtonStyle,
        bg: "brand.tertiary",
        color: "white",
        border: "1px solid brand.tertiary",
        transition: "all 0.3s ease-in-out",
        _active: {
          transform: "scale(.9)",
        },
        _hover: {
          color: "#BEC2CA",
          background: "white",
          border: "1px solid #BEC2CA",
        },
      },
      accent: {
        ...ButtonStyle,
        bg: "brand.accent",
        color: "white",
        border: "1px solid brand.accent",
        transition: "all 0.3s ease-in-out",
        _active: {
          transform: "scale(.9)",
        },
        _hover: {
          color: "#BEC2CA",
          background: "white",
          border: "1px solid #BEC2CA",
        },
      },
      // Gradient variants for student exam
      gradient: {
        ...ButtonStyle,
        bg: "gradients.primary",
        color: "white",
        border: "1px solid brand.primary",
        transition: "all 0.3s ease-in-out",
        _active: {
          transform: "scale(.9)",
        },
        _hover: {
          filter: "brightness(1.1)",
          transform: "scale(1.05)",
        },
      },
      purpleDark: {
        ...ButtonStyle,
        bg: "exam.purpleDark",
        color: "white",
        border: "1px solid exam.purpleDark",
        transition: "all 0.3s ease-in-out",
        _active: {
          transform: "scale(.9)",
        },
        _hover: {
          bg: "brand.primary",
          border: "1px solid brand.primary",
        },
      },
    },
  },
  Text: {
    baseStyle: {
      fontFamily: "Outfit",
      color: "text.primary",
    },
  },
  Input: {
    baseStyle: {
      field: {
        color: "text.main",
      },
    },
  },
  Textarea: {
    baseStyle: {
      color: "text.main",
    },
  },
  Switch: {
    baseStyle: {
      track: {
        width: "4rem",
        height: "2.4rem",
        bg: "#BEC2CA",
        _checked: {
          bg: "#5CA647",
        },
        "&[data-checked] .chakra-switch__thumb": {
          transform: "translateX(1.7rem)",
        },
      },

      thumb: {
        width: "2.4rem",
        height: "2.4rem",
      },
    },
  },
};

const spacing = {
  space: {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
};

const darkTheme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
  spacing,
});

export default darkTheme;
