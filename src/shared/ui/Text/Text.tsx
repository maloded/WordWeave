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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div className={classNames(css.Text, {}, [className, css[theme], css[align]])}>
      {title && <p className={css.title}>{title}</p>}
      {text && <p className={css.text}>{text}</p>}
    </div>
  );
});
