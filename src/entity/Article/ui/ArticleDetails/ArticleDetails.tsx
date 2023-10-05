import { memo } from 'react';
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
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { VStack } from '@/shared/ui/Stack';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailSlice';
import cls from './ArticleDetails.module.scss';
import { renderBlock } from './renderBlock';
import { AppImage } from '@/shared/ui/AppImage';

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

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.title} width={200} height={32} />
        <Skeleton className={cls.skeleton} width={500} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={450} />
        <Skeleton className={cls.skeleton} width="100%" height={40} />
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
        <Text
          title={article?.title}
          size='l'
          bold
        />
        <Text
          text={article?.subtitle}
        />
        <AppImage
          fallback={<Skeleton width="100%" height={420} border="16px" />}
          src={article?.img}
          className={cls.img}
        />
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
