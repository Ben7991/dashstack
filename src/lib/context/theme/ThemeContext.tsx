import { createContext, useContext } from "react";
import { Theme } from "../../enum/theme";

export type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
}


export const ThemeContext = createContext<ThemeContextState | null>(null);


export function useThemeContext() {
  const themeCtx = useContext(ThemeContext);

  if (themeCtx === null) {
    throw new Error("Theme context shouldn't be null");
  }

  return themeCtx;
}
