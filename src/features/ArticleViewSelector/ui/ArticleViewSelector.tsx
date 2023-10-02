import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entity/Article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick,
  } = props;

  const onClick = (view: ArticleView) => () => {
    onViewClick?.(view);
  };

  return (
    <Card
      className={classNames(cls.ArticleViewSelector, {}, [className])}
      border='round'
    >
      <HStack>
        {viewTypes.map((viewType) => (
          <Icon
            clickable
            onClick={onClick(viewType.view)}
            className={classNames('', { [cls.selected]: viewType.view === view }, [])}
            Svg={viewType.icon}
          />
        ))}
      </HStack>
    </Card>
  );
});
