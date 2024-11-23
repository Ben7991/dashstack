import { ReactNode, useEffect, useState } from "react";

import { Theme } from "../../enum/theme";
import { ThemeContext, ThemeContextState } from "./ThemeContext";


type ThemeProviderProps = {
  children: ReactNode;
}


export default function ThemeContextProvider({children}: ThemeProviderProps) {
  const storedTheme = localStorage.getItem('theme');
  const previousTheme = storedTheme ? storedTheme as Theme : Theme.LIGHT;
  const [theme, setTheme] = useState<Theme>(previousTheme);
  const isLightTheme = theme === Theme.LIGHT;

  useEffect(() => {
    if (!isLightTheme) {
      document.querySelector('html')!.className = 'dark';
    }
    else {
      document.querySelector('html')!.className = '';
    }
  }, [isLightTheme]);

  const value: ThemeContextState  = {
    theme,
    toggleTheme() {
      const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      setTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}