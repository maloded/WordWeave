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
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Text } from '@/shared/ui/Text';

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

  const toolbar = <Text title="Hello" />

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <MainLayout
          header={<Navbar />}
          content={<AppRouter />}
          sidebar={<Sidebar />}
          toolbar={toolbar}
        />
      </Suspense>
    </div>
  );
};

export default App;
