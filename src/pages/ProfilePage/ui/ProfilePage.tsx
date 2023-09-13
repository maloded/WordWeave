import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProfileCard, fetchProfileData, getProfileReadonly, profileActions, profileReducer,
  getProfileIsLoading, getProfileForm, getProfileError, getProfileValidateErrors,
} from 'entity/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      first: value || '',
    }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value || '',
    }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value) || 0,
    }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      city: value || '',
    }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      username: value || '',
    }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value || '',
    }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({
      currency,
    }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({
      country,
    }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames('', {}, [className])}>
        <VStack gap="16" max>
          <ProfileHeader
            readonly={readonly}
          />
          {validateErrors?.length && validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={t(err)}
            />
          ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeFirsname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCountry={onChangeCountry}
            onChangeCurrency={onChangeCurrency}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>

  );
};

export default ProfilePage;
