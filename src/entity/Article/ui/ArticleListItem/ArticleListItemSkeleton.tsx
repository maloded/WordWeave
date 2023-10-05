import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/consts/article';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
      <Card
        padding="16"
        max
        data-testid="ArticleListItem"
        className={classNames('', {}, [className, cls[view]])}>
        <VStack max gap="16">
          <HStack gap="8" max>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={60} height={16} />
            <Skeleton width={60} height={16} />
          </HStack>
          <Skeleton width={120} height={24} />
          <Skeleton width={300} height={24} />
          <Skeleton width="100%" height="420px" />
          <VStack gap="4" max>
            <Skeleton width="100%" height={16} />
            <Skeleton width="100%" height={16} />
            <Skeleton width="100%" height={16} />
            <Skeleton width="100%" height={16} />
          </VStack>
          <HStack max justify='between'>
            <Skeleton width={120} height={32} />
            <Skeleton width={100} height={16} />
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <div className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card} border="round">
        <Skeleton width={222} height={222} className={cls.img} />
        <VStack className={cls.info} gap="4">
          <Skeleton width={150} height={30} />
          <VStack gap="16" className={cls.footer} max>
            <HStack justify="between" max>
              <Skeleton width={100} height={16} />
              <Skeleton width={100} height={16} />
            </HStack>
            <HStack gap="8">
              <Skeleton border="50%" height={30} width={30} />
              <Skeleton width={60} height={16} />
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </div >
  );
});
