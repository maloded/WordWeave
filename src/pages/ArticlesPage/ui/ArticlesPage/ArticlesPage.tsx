import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  articlesPageReducer,
} from '../../model/slices/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlesPage.module.scss';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticesPage/initArticesPage';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <Page
      data-testid="ArticlesPage"
      onScrollEnd={onLoadNextPart}
      className={classNames(cls.ArticlesPage, {}, [className])}
    >
      <ArticleInfiniteList className={cls.list} />
    </Page>
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <StickyContentLayout
        left={<ViewSelectorContainer />}
        right={<FiltersContainer />}
        content={content}
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
