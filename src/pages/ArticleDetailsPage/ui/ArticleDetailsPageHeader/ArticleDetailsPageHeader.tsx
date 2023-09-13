import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entity/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

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
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [navigate, article?.id]);

  return (
    <HStack
      max
      justify="between"
      className={classNames('', {}, [className])}
    >
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('Back to list')}
      </Button>
      {canEdit && (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}
        >
          {t('Refactor')}
        </Button>
      )}
    </HStack>
  );
});
