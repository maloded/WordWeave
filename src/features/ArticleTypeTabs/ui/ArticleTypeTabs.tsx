import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Tab, TabItem } from '@/shared/ui/Tab';
import { ArticleType } from '@/entity/Article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    onChangeType,
    value,
  } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<Array<TabItem<ArticleType>>>(() => [
    {
      value: ArticleType.ALL,
      content: t('All'),
    },
    {
      value: ArticleType.IT,
      content: t('IT'),
    },
    {
      value: ArticleType.FINANCIAL,
      content: t('Financial'),
    },
    {
      value: ArticleType.ECONOMIC,
      content: t('Economic'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Science'),
    },
  ], [t]);

  return (
    <Tab
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeType}
      className={classNames('', {}, [className])}
    />
  );
});
