import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { useTranslation } from 'react-i18next';
import css from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        css.Sidebar,
        { [css.collapsed]: collapsed },
        [className],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={css.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={css.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={css.item}
        >
          <MainIcon className={css.icon} />
          <span className={css.link}>
            {t('Main')}
          </span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={css.item}
        >
          <AboutIcon className={css.icon} />
          <span className={css.link}>
            {t('About')}
          </span>
        </AppLink>
      </div>

      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={css.lang} short={collapsed} />
      </div>
    </div>
  );
};
