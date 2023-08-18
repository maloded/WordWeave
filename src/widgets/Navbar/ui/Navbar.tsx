import css from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(css.Navbar, {}, [className])}>
      <div className={css.links}>
        <AppLink 
          theme={AppLinkTheme.SECONDARY} 
          to={'/'} className={css.mainLink}
        >
          Main
        </AppLink>
        <AppLink 
          theme={AppLinkTheme.SECONDARY} 
          to={'/about'}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};
