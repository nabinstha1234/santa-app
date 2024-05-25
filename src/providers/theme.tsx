import { createContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Theme } from 'constants/theme';
import { theme } from 'theme';

import GlobalStyle from './global';

type theme = (typeof Theme)[keyof typeof Theme];

type ThemeContextType = {
  currentTheme: theme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<theme>>;
};

export const CurrentThemeContext = createContext<ThemeContextType>({
  currentTheme: Theme.Light,
  setCurrentTheme: () => {},
});

type GlobalThemeProviderProps = {
  children: React.ReactNode;
};

export const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<theme>(Theme.Light);

  return (
    <CurrentThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </CurrentThemeContext.Provider>
  );
};
