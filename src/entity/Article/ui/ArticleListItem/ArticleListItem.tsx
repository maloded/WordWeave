import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import {
  Article,
  ArticleTextBlock,
} from '../../model/types/article';
import {
  ArticleBlockType,
  ArticleView,
} from '../../model/consts/article';
import cls from './ArticleListItem.module.scss';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

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

  const userInfo = (
    <>
      <Avatar
        size={32}
        src={article.user.avatar}
        className={cls.avatar}
      />
      <Text
        bold
        text={article.user.username}
      /></>
  );

  const views = (
    <HStack gap="8">
      <Icon Svg={EyeIcon} />
      <Text
        text={String(article.views)}
      />
    </HStack>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks
      .find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <Card
        padding="16"
        max
        data-testid="ArticleListItem"
        className={classNames('', {}, [className, cls[view]])}>
        <VStack max gap="16">
          <HStack gap="8" max>
            {userInfo}
            <Text
              text={article.createdAt}
            />
          </HStack>
          <Text
            bold
            title={article.title}
          />
          <Text
            bold
            text={article.subtitle}
          />
          <AppImage
            fallback={<Skeleton width="100%" height="250px" />}
            className={cls.img}
            alt={article.title}
            src={article.img}
          />
          {textBlock?.paragraphs && (
            <Text
              className={cls.textBlock}
              text={textBlock.paragraphs.slice(0, 2).join('\t\n')}
            />
          )}
          <HStack max justify='between'>
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <Button
                variant="outline"
              >
                {t('Continue read')}
              </Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames('', {}, [className, cls[view]])}
    >
      <Card className={cls.card} border="round" padding="0">
        <AppImage
          fallback={<Skeleton width="100%" height={200} />}
          alt={article.title}
          src={article.img}
          className={cls.img}
        />
        <VStack className={cls.info} gap="4">
          <Text title={article.title} className={cls.title} />
          <VStack gap="4" className={cls.footer} max>
            <HStack justify="between" max>
              <Text
                text={article.createdAt}
                className={cls.date}
              />
              {views}
            </HStack>
            <HStack gap="8">{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  );
});
