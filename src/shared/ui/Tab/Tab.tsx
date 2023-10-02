import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tab.module.scss';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem<T> {
  value: T;
  content: ReactNode;
}

interface TabProps<T> {
  className?: string;
  tabs: Array<TabItem<T>>;
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
  direction?: FlexDirection;
}

export const Tab = <T extends string>(props: TabProps<T>) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
    direction = 'row'
  } = props;

  const clickHandler = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <Flex
      direction={direction}
      gap="8"
      align="start"
      className={classNames(cls.Tab, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;

        return (
          <Card
            key={tab.value}
            className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
            variant={isSelected ? 'light' : 'normal'}
            onClick={clickHandler(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  );
};
