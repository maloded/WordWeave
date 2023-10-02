import { memo, useCallback } from 'react';
import ThemeIcon from '@/shared/assets/icons/theme-32-32.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { saveJsonSettings } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    })
  }, [toggleTheme, dispatch]);

  return (
    <Icon
      className={className}
      clickable
      onClick={onToggleHandler}
      Svg={ThemeIcon}
      width={40}
      height={40}
    />
  );
});
