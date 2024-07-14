import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
    text: "#000000",
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#333333",
    text: "#ffffff",
  },
};
