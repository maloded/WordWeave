import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tab.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T> {
  value: T;
  content: ReactNode;
}

interface TabProps<T> {
  className?: string;
  tabs: Array<TabItem<T>>;
  value: string;
  onTabClick: (tab: TabItem<T>) => void;
}

export const Tab = <T extends string>(props: TabProps<T>) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  const clickHandler = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tab, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
