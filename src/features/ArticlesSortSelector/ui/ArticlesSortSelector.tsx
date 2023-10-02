import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectOption } from '@/shared/ui/Select';
import { ArticlesSortField } from '../model/types/sort';
import { ListBox } from '@/shared/ui/Popups';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

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
    <VStack
      gap="8"
      className={className}
    >
      <Text text={t('Sort by')} />
      <ListBox
        items={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <ListBox
        items={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </VStack>
  );
});
