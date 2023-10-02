import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { getUserAuthData } from '@/entity/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';
import { Icon } from '@/shared/ui/Icon';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    item,
    collapsed,
  } = props;

  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      variant='primary'
      activeClassName={cls.active}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
    >
      <Icon Svg={item.Icon} />

      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
