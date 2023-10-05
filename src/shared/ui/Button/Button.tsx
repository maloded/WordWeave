import { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  isDisabled?: boolean;
  fullWidth?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    children,
    variant = 'outline',
    square = false,
    size = 'm',
    color = 'normal',
    fullWidth,
    isDisabled,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: isDisabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  };

  const additional: Array<string | undefined> = [
    className,
    cls[variant],
    cls[size],
    cls[color],
  ];

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, additional)}
      disabled={isDisabled}
      {...otherProps}
      ref={ref}
    >
      {/* eslint-disable-next-line */}
      <>
        <div className={cls.addonLeft}>{addonLeft}</div>
        {children}
        <div className={cls.addonRight}>{addonRight}</div>
      </>
    </button>
  );
});
