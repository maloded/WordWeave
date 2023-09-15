import { CommentList } from 'entity/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { VStack } from 'shared/ui/Stack';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const {
    className,
    id,
  } = props;

  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoadingComments = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        title={t('Comments')}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={isLoadingComments} comments={comments} />
    </VStack>
  );
});