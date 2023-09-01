import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import css from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
  } = props;

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const { t } = useTranslation('profile');

  return (
    <div className={classNames(css.ProfileCard, {}, [className])}>
      <div className={css.header}>
        <Text title={t('Profile')} />
        <Button
          className={css.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Edit profile')}
        </Button>
      </div>
      <div className={css.data}>
        <Input
          value={data?.first}
          placeholder={t('Your name')}
          className={css.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your lastname')}
          className={css.input}
        />
      </div>
    </div>
  );
};
