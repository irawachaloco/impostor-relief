"use client";

import DemoSection from "@/app/components/DemoSection";
import React, { createContext, FC, useContext, useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import styles from "./Theme.module.css";

// Utility function
const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Theme selection component
const SelectComponent: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="border-solid border-2 border-gray-300 rounded-md p-4">
      <p className="pb-2">Select a theme</p>
      <select
        className="w-full p-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-32"
        onChange={(e) => setTheme(e.target.value)}
        value={theme}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </section>
  );
};

// Theme display component
const ThemeStyledComponent: FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${
        theme === "dark" ? styles.dark : styles.light
      } flex justify-center items-center border-soild border-2 rounded-md min-h-32 p-4`}
    >
      <p>
        <span className="font-bold">{capitalizeFirstLetter(theme)}</span> is the
        current theme
      </p>
    </section>
  );
};

const Demo: FC = () => {
  return (
    <ThemeProvider>
      <DemoSection>
        <div className="flex flex-col space-y-4">
          <SelectComponent />
          <ThemeStyledComponent />
        </div>
      </DemoSection>
    </ThemeProvider>
  );
};

export default Demo;
