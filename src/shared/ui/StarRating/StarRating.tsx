import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '../../assets/icons/star.svg';

interface StartRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStarts?: number;
}

export const StarRating = memo((props: StartRatingProps) => {
  const {
    className,
    onSelect,
    size = 30,
    selectedStarts = 0,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStarts);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStarts));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const stars = [1, 2, 3, 4, 5];

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(cls.starIcon, {
            [cls.normal]: currentStarsCount < starNumber,
            [cls.hovered]: currentStarsCount >= starNumber,
            [cls.selected]: isSelected,
          }, [])}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
