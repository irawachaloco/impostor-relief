"use client";

import DemoSection from "@/app/components/DemoSection";
import React, { createContext, useState } from "react";

const ThemeContext = createContext<string | null>(null);

const Demo = () => {
  const [theme, setTheme] = useState("light");

  const handleOnSelect = () => {
    console.log("HOLA MAMA");
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <DemoSection>
        Select a theme
        <select onSelect={handleOnSelect}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <p>Current theme: {theme}</p>
      </DemoSection>
    </ThemeContext.Provider>
  );
};

export default Demo;
