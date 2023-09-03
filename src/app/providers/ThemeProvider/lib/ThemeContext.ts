import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light',
  DARK = 'app_dark',
  GREEN = 'app_green'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
