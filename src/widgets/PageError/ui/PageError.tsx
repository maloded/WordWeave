import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import css from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(css.PageError, {}, [className])}>
      <p>{t('Somthing went wrong')}</p>
      <Button
        onClick={reloadPage}
      >
        {t('Refresh page')}
      </Button>
    </div>
  );
};