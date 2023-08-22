import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ButtonHTMLAttributes } from 'react';
import css from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [css.square]: square,
  };

  const additional: string[] = [
    className,
    css[theme],
    css[size],
  ];

  return (
    <button
      type="button"
      className={classNames(css.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
