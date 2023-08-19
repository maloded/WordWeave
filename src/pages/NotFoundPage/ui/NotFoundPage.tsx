import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import css from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(css.NotFoundPage, {}, [className])}>
      {t('Not found')}
    </div>
  );
};
