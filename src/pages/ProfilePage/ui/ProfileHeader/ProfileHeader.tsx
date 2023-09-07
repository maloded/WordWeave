import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  getCanEditProfile, getProfileData, profileActions, updateProfileData,
} from 'entity/Profile';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import cls from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
  className?: string;
  readonly?: boolean;
}

export const ProfileHeader = (props: ProfileHeaderProps) => {
  const {
    className,
    readonly = true,
  } = props;

  const { t } = useTranslation('profile');
  const canEdit = useSelector(getCanEditProfile);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfileHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly
            ? (
              <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Edit profile')}
              </Button>
            )
            : (
              <>
                <Button
                  className={cls.editBtn}
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  className={cls.saveBtn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSaveEdit}
                >
                  {t('Save')}
                </Button>
              </>
            )}
        </div>
      )}
    </div>
  );
};
