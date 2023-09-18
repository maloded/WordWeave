import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const {
    className,
  } = props;
  const { isLoading, data, error } = useNotifications(null, {
    pollingInterval: 20000,
  });
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames('', {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  if (error) {
    return (
      <VStack
        gap="16"
        max
        className={classNames('', {}, [className])}
      >
        <Text title={t('Error during notifications loading')} />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames('', {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
