"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: (theme: string) => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setThemeState(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
