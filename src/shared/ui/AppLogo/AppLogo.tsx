import { memo } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/grid.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    collapsed?: boolean;
}

export const AppLogo = memo(({ className, collapsed = true }: AppLogoProps) => (
  <HStack
    max
    justify="center"
    className={classNames(cls.appLogoWrapper, {}, [className])}
  >
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
    <AppSvg
      width={collapsed ? 30 : 50}
      height={collapsed ? 30 : 50}
      className={cls.appLogo}
    />
    <p
      className={classNames(cls.logoText, { [cls.collapsed]: collapsed }, [])}
    >
      {collapsed ? 'W' : 'WordWeave'}
    </p>
  </HStack>
));
