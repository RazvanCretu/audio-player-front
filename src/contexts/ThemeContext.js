import React, { createContext } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext = createContext();

export const Theme = ({ children }) => {
  const { theme, toggleTheme, isDarkTheme, mounted } = useTheme();

  if (!mounted) return <div style={{ visibility: "hidden" }} />;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
