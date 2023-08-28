import { classNames } from 'shared/lib/classNames/classNames';
import css from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = (props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(css.Text, {}, [className, css[theme]])}>
      {title && <p className={css.title}>{title}</p>}
      {text && <p className={css.text}>{text}</p>}
    </div>
  );
};
