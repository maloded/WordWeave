import { classNames } from 'shared/lib/classNames/classNames';
import css from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div
        className={classNames(css.Sidebar, {[css.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={css.lang} />
      </div>
    </div>
  );
};
