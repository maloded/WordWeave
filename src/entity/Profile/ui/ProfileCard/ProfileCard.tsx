import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entity/Currency';
import { Country, CountrySelect } from 'entity/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirsname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly = true,
    onChangeFirsname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Somthing went wrong with loading profile')}
          text={t('Try refreshing the page')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {readonly
          ? (
            <div className={cls.avatarWrapper}>
              <Avatar src={data?.avatar} size={100} />
            </div>
          )
          : (
            <Input
              value={data?.avatar}
              placeholder={t('Your avatar')}
              className={cls.input}
              readonly={readonly}
              onChange={onChangeAvatar}
            />
          )}
        <Input
          value={data?.first}
          placeholder={t('Your name')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirsname}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your lastname')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder={t('Your age')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('Your Sity')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('Your username')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeUsername}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
