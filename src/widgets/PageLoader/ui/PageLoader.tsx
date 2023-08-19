import { classNames } from 'shared/lib/classNames/classNames'
import css from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(css.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
