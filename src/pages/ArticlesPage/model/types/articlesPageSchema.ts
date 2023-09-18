import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from '@/entity/Article';
import { ArticlesSortField } from '@/features/ArticlesSortSelector';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // Pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // Filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
