import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entity/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const { theme } = useTheme();
  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
