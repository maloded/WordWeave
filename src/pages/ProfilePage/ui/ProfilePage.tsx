import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EditableProfileCard } from '@/features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const {
    className,
  } = props;

  const { id } = useParams<{ id: string }>();

  return (
    <div data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <EditableProfileCard id={id} />
    </div>
  );
};

export default ProfilePage;
