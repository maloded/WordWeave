import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  Article,
  ArticleTextBlock,
} from '../../model/types/article';
import {
  ArticleBlockType,
  ArticleView,
} from '../../model/consts/article';
import cls from './ArticleListItem.module.scss';
import { RoutePath } from '@/shared/const/router';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
    target,
  } = props;

  const { t } = useTranslation();

  const types = (
    <Text
      className={cls.types}
      text={article.type.join(', ')}
    />
  );

  const views = (
    <>
      <Text
        className={cls.views}
        text={String(article.views)}
      />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text
              className={cls.username}
              text={article.user.username}
            />
            <Text
              className={cls.date}
              text={article.createdAt}
            />
          </div>
          <Text
            className={cls.title}
            title={article.title}
          />
          {types}
          <img
            className={cls.img}
            alt={article.title}
            src={article.img}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              className={cls.textBlock}
              block={textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={`${RoutePath.article_details}${article.id}`}
            >
              <Button
                theme={ButtonTheme.OUTLINE}
              >
                {t('Continue read')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={`${RoutePath.article_details}${article.id}`}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img
            className={cls.img}
            alt={article.title}
            src={article.img}
          />
          <Text
            className={cls.date}
            text={article.createdAt}
          />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text
          className={cls.title}
          text={article.title}
        />
      </Card>
    </AppLink>
  );
});
