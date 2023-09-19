import { ButtonHTMLAttributes, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    fullWidth,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  const additional: Array<string | undefined> = [
    className,
    cls[theme],
    cls[size],
  ];

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, additional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
