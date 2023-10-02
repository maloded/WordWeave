import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import {  ArticleType } from '@/entity/Article';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { ArticlesSortField, ArticlesSortSelector } from '@/features/ArticlesSortSelector';
import { TabItem } from '@/shared/ui/Tab';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticlesSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticlesSortField) => void;
    onChangeType: (type: TabItem<ArticleType>) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeType,
    onChangeSearch,
    search,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    type,
  } = props;
  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32">
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Search')}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
        <ArticlesSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
