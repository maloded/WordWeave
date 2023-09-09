import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entity/Article';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

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
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            className={classNames('', { [cls.selected]: viewType.view === view }, [])}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
