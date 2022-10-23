import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode(theme);
    setMounted(true);
  }, [theme, setMounted]);

  const toggleTheme = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  const isDarkTheme = theme === "dark" ? true : false;

  return { theme, toggleTheme, isDarkTheme, mounted };
};
