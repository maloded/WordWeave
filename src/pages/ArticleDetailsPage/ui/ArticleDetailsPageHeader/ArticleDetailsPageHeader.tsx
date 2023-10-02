import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { getArticleDetailsData } from '@/entity/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleDetails, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation('article-details');
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const navigate = useNavigate();
  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleDetails(article.id));
    }
  }, [navigate, article]);

  return (
    <HStack
      max
      justify="between"
      className={classNames('', {}, [className])}
    >
      <Button
        variant="outline"
        onClick={onBackToList}
      >
        {t('Back to list')}
      </Button>
      {canEdit && (
        <Button
          variant="outline"
          onClick={onEditArticle}
        >
          {t('Refactor')}
        </Button>
      )}
    </HStack>
  );
});
