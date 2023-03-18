import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      500: "#FF577F",
      600: "#FF427F",
      800: "#59323F",
      900: "#E83F5B",
    },
    gray: {
      500: "#111",
      400: "#121214",
      300: "#212529",
      200: "#343B41",
      100: "#868E96",
      50: "#F8F9FA",
    },
    green: {
      600: "#3FE864",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    styles: {
      global: {
        body: {
          bg: "white",
          color: "grey.900",
        },
      },
    },
  },
});
