import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/ui/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getArticleDetailsData } from '@/entity/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { getCanEditArticle } from '../../model/selectors/article';
import { Skeleton } from '@/shared/ui/Skeleton';

export const AdditionalInfoContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  if (!article) {
    return <Skeleton height={200} width={250}/>;
  }

  return (
    <Card padding="24" border="round" className={cls.card}>
      <ArticleAdditionalInfo
        onBackToList={onBackToList}
        onEdit={onEditArticle}
        canEdit={canEdit}
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
      />
    </Card>
  );
});
