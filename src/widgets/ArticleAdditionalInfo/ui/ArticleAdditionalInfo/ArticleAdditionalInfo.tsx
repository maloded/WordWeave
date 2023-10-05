import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User } from '@/entity/User';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  canEdit: boolean;
  onEdit: () => void;
  onBackToList: () => void;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
  const {
    className,
    author,
    createdAt,
    views,
    onEdit,
    canEdit = false,
    onBackToList
  } = props;
  const { t } = useTranslation('article-details');

  return (
    <VStack
      gap="32"
      className={classNames('', {}, [
        className,
      ])}
    >
      <HStack max justify='between' gap="8">
        <Avatar src={author.avatar} size={40} />
        <Text text={author.username} bold />
      </HStack>
      <HStack gap="8">
        <Button
          variant="outline"
          onClick={onBackToList}
        >
          {t('Back to list')}
        </Button>
        {canEdit && <Button onClick={onEdit}>{t('Refactor')}</Button>}
      </HStack>
      <HStack gap="16">
        <HStack gap="8">
          <Icon Svg={EyeIcon} />
          <Text text={`${views}`} />
        </HStack>
        <HStack gap="8">
          <Icon Svg={CalendarIcon} />
          <Text
            text={String(createdAt)}
          />
        </HStack>
      </HStack>
    </VStack>
  );
},
);
