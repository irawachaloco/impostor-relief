"use client";

import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const THEME_CONTEXT_CODE = `
// ThemeContext.tsx

// Type definition for the ThemeContext
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

// Props for the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Create the ThemeContext with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to encapsulate the context logic
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for accesing the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider.Wrap your component tree with <ThemeProvider>."
    );
  }

  return context;
};
`.trim();

const USING_CONTEXT_CODE = `
// Theme selection component
const SelectComponent: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <p>Select a theme</p>
      <select
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
      className={(theme === "dark" ? styles.dark : styles.light)}
    >
      {/*  content... */}
    </section>
  );
};

// Main demo component
const Demo: FC = () => {
  return (
    <ThemeProvider>
      <DemoSection>
        <div>
          <SelectComponent />
          <ThemeStyledComponent />
        </div>
      </DemoSection>
    </ThemeProvider>
  );
};
`.trim();

const ThemeContextChapter = () => {
  return (
    <div>
      <h2 className="text-[#686868] text-xl font-semibold mb-4">
        Theme Switcher
      </h2>
      <p>
        This is a very simple and common example showcasing the use of the
        Context API in modern React applications.
      </p>
      <p>
        Two isolated components are presented in this demo: one modifies the
        theme context, while the other consumes it as a global context.
      </p>
      <Demo />

      <section>
        <p>
          The first step, is to create such a context in order to use it later
          on the component we want to point. To create such a context it has
          been created the ThemeContext.tsx file, which will contain all the
          context logic along with the context itself and a provider.
        </p>
        <CodeBlock language="tsx" code={THEME_CONTEXT_CODE} />

        <p>
          {`Then, supose you have this two components <SelectComponent /> and
          <ThemeStyledComponent /> you can use the context like this:`}
          <CodeBlock language="tsx" code={USING_CONTEXT_CODE} />
        </p>
      </section>
    </div>
  );
};

export default ThemeContextChapter;
