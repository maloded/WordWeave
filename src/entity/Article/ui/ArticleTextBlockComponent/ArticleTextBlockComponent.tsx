import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import css from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const {
    className,
    block,
  } = props;

  return (
    <div className={classNames(css.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={css.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={css.paragraph} />
      ))}
    </div>
  );
});
