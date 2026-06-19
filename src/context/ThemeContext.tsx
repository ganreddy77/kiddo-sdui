import React, {
  createContext,
  useContext,
} from "react";

type Theme = {
  primary: string;
  background: string;
};

const ThemeContext = createContext<Theme>({
  primary: "#FF9933",
  background: "#FFFFFF",
});

export function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}