import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const {
    className,
  } = props;

  return (
    <Page data-testid="AdminPanelPage" className={classNames('', {}, [className])}>
      Admin
    </Page>
  );
});

export default AdminPanelPage;
