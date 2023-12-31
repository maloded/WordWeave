import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();

  return (
    <Page data-testid="ForbiddenPage" className={classNames('', {}, [className])}>
      <Text align="center" title={t('The page is forbidden for you!')} />
    </Page>
  );
});
