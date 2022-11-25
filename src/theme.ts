import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark", // dark || light || system
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
