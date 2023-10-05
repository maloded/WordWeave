import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { Card } from '@/shared/ui/Card';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        gap="8"
        max
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <Card
      padding="0"
      max
      border="round"
      className={className}
    >
      <HStack
        align='start'
        data-testid="CommentCard.Content"
        max
        gap="8"
      >
        <Card border="round" padding="0" className={cls.card}>
          <AppLink
            to={getRouteProfile(comment.user.id)}
            className={cls.header}
          >
            <Avatar
              className={cls.username}
              size={36}
              src={comment.user?.avatar}
            />
            <Text
              className={cls.username}
              text={comment?.user.username}
            />
          </AppLink>
        </Card>
        <Card
          className={cls.comment}
          max
          border="round"
          padding="16"
        >
          <Text className={cls.text} text={comment?.text} />
        </Card>
      </HStack>
    </Card>
  );
});
