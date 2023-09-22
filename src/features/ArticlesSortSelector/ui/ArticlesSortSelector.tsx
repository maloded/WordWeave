import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import cls from './ArticlesSortSelector.module.scss';
import { ArticlesSortField } from '../model/types/sort';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticlesSortField) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;

  const { t } = useTranslation();

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('ascending'),
    },
    {
      value: 'desc',
      content: t('descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<Array<SelectOption<ArticlesSortField>>>(() => [
    {
      value: ArticlesSortField.CREATED,
      content: t('created at'),
    },
    {
      value: ArticlesSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticlesSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
      <Select<ArticlesSortField>
        options={sortFieldOptions}
        label={t('Sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        options={orderOptions}
        label={t('By')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
