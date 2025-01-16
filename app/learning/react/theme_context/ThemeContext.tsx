import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to encapsulate the context logic
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
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
