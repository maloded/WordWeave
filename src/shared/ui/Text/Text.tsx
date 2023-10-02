import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'righ' | 'center' | 'left';

export type TextSize = 's' | 'm' | 'l';


interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: 'size-s',
  m: 'size-m',
  l: 'size-l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h3',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    'data-testid': dataTestidId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const addClasses = [className, cls[variant], cls[align], sizeClass];

  return (
    <div className={classNames(cls.Text, {}, addClasses)}>
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestidId}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={cls.text}
          data-testid={`${dataTestidId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  );
});
