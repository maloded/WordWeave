import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { saveJsonSettings } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    })
  }, [toggleTheme, dispatch]);

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={onToggleHandler}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
