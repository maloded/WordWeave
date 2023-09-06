import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import css from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
  } = props;

  return (
    <Svg className={classNames(css.Icon, {}, [className])} />
  );
});
