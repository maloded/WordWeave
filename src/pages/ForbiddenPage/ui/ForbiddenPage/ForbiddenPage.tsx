import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text, TextAlign } from '@/shared/ui/Text';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      <Text align={TextAlign.CENTER} title={t('The page is forbidden for you!')} />
    </Page>
  );
});
