import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/article';
import {
  ArticleCodeBlockComponent,
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id,
  } = props;
  const { t } = useTranslation('article-details');

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={200} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Download error')}
        align="center"
      />
    );
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar
            size={200}
            src={article?.img}
            className={cls.avatar}
          />
        </HStack>
        <VStack gap="4" max>
          <Text
            className={cls.title}
            title={article?.title}
            text={article?.subtitle}
            size="l"
          />
          <HStack gap="8">
            <Icon className={cls.icon} Svg={EyeIcon} />
            <Text
              text={String(article?.views)}
            />
          </HStack>
          <HStack gap="8">
            <Icon className={cls.icon} Svg={CalendarIcon} />
            <Text
              text={String(article?.createdAt)}
            />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        gap="16"
        max
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
