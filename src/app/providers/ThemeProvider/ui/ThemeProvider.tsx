import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entity/User';


interface ThemeProviderProps {
  children?: ReactNode,
  initialTheme?: Theme,
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    children,
    initialTheme,
  } = props;
  const { theme: defaultTheme } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

  useEffect(() => {
    if (defaultTheme) {
      setTheme(defaultTheme);
    }
  }, [defaultTheme]);

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
