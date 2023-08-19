import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(css.Navbar, {}, [className])}>
    <div className={css.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={css.mainLink}
      >
        Main
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/about"
      >
        About
      </AppLink>
    </div>
  </div>
);
