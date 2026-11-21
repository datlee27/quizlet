import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {};

const customTheme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "480px",
    custom: "600px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1536px",
  },
});

const colors = {
  layout: {
    navy: "#283191", // Layout navy background
    navyDark: "#29458D", // Darker navy for mobile
  },
  background: {},
  icon: {},
  main: {},
  upload: {
    hover: "#d9d9d9",
  },
  dark: {},
  grey: {},
  bg: {
    main: "#000",
  },
  border: {},
  text: {
    main: "#fff",
  },
  font: {
    nunito: `"Nunito", sans-serif`,
  },
  // Brand colors
  brand: {
    primary: "#9F73FF", // Main purple
    secondary: "#60B1F3", // Blue
    tertiary: "#408E92", // Teal
    accent: "#F9B82E", // Yellow/Orange
    white: "#fff", // White
  },
  // Student exam colors
  exam: {
    card: "#3D59D6", // Card background blue
    navy: "#183581", // Navy background
    navyDark: "#223C7D", // Dark navy
    blue: "#3E4987", // Blue background
    purpleDark: "#8954FF", // Dark purple
    success: "#98FD1D", // Green success
    error: "#FF4249", // Red error
    gray: "#3E455D", // Gray blue
    grayLight: "#B0B6CF", // Light gray blue
    grayVeryLight: "#E9E9E9", // Very light gray
    grayHover: "#D0D0D0", // Gray hover
    textDark: "#3B3E4B", // Dark text
    textGray: "#4A5568", // Gray text
    answerOrange: "#FFC187", // Answer gradient start
    answerOrangeEnd: "#FDB777", // Answer gradient end
    // Additional colors for UI elements
    exitButtonBg: "#E9E9E9", // Exit button background
    exitButtonHover: "#FFB3B3", // Exit button hover
    // Answer option colors for practice
    answerOption1: "#FF8000", // Orange
    answerOption2: "#FF00EE", // Magenta
    answerOption3: "#00FFE1", // Cyan
    answerOption4: "#FFCC00", // Yellow
  },
  // Gradients
  gradients: {
    primary: "linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)",
    answerSelected: "linear-gradient(to right, #FFC187, #FDB777)",
  },
};

const fonts = {
  heading: `"Nunito", sans-serif`,
  body: `"Nunito", sans-serif`,
};

const ButtonStyle = {
  width: "100%",
  height: "4.8rem",
  fontFamily: `"Nunito", sans-serif`,
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
        _active: {
          transform: "scale(.9)",
        },
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
        _active: {
          transform: "scale(.9)",
        },
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
      // Exit button variant for practice pages
      exit: {
        ...ButtonStyle,
        width: "220px",
        height: "64px",
        bg: "exam.exitButtonBg",
        color: "exam.textDark",
        borderTop: "1.54545px solid rgba(255, 255, 255, 0.75)",
        boxShadow: "0px 6.18182px 6.18182px rgba(0, 0, 0, 0.25)",
        borderRadius: "12.3636px",
        fontSize: "28px",
        fontWeight: "900",
        transition: "all 0.3s ease-in-out",
        _active: {
          transform: "scale(.9)",
        },
        _hover: {
          bg: "exam.exitButtonHover",
        },
      },
    },
  },
  Text: {
    baseStyle: {
      color: "text.main",
    },
  },
  Select: {
    sizes: {
      sm: {
        field: {
          height: "4rem",
          fontSize: "1.6rem",
          fontFamily: '"Inter", sans-serif',
          rounded: ".8rem",
        },
      },
    },

    defaultProps: {
      size: "sm",
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

export const defaultTheme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
  customTheme,
});
