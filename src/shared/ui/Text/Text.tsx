import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import css from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  return (
    <div className={classNames(css.Text, {}, [className, css[theme], css[align], css[size]])}>
      {title && <p className={css.title}>{title}</p>}
      {text && <p className={css.text}>{text}</p>}
    </div>
  );
});
