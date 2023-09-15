import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation('profile');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text title={t('Profile is not found')} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
