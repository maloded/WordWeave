import { classNames } from 'shared/lib/classNames/classNames';
import css from './Button.module.scss';
import { FC, ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;
  return (
    <button 
      className={classNames(css.Button, {}, [className, css[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
