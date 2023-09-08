import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entity/Article';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article');

  const articles: Array<Article> = [];

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList view={ArticleView.BIG} articles={articles} />
    </div>
  );
};

export default memo(ArticlesPage);
