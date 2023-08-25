import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(css.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={css.links}
        onClick={onToggleModal}
      >
        {t('Log in')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Hic veniam architecto nisi quasi atque deserunt quidem earum sunt ducimus odio,
          <br />
          praesentium velit omnis sint dolore, dolorem tempora quod recusandae accusamus!
        </p>
      </Modal>
    </div>
  );
};
