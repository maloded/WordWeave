import {
  ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

console.log('key', localStorage.getItem(LOCAL_STORAGE_THEME_KEY));
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  || (localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.LIGHT), Theme.LIGHT);

interface ThemeProviderProps {
  children?: ReactNode,
  initialTheme?: Theme,
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    children,
    initialTheme,
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
