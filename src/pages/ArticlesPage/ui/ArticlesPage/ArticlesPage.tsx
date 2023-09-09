import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entity/Article';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  fetchArticlesList
} from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../../model/slices/articlesPageSlice';

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
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          view={view}
          articles={articles}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
