import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.textSubtle,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
};
