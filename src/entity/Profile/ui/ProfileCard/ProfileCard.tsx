import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entity/Currency';
import { Country, CountrySelect } from '@/entity/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
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
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          title={t('Somthing went wrong with loading profile')}
          text={t('Try refreshing the page')}
          variant="error"
          align="center"
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
      {readonly
        ? (
          <HStack justify="center" max>
            <Avatar src={data?.avatar} size={100} />
          </HStack>
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
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Your lastname')}
        className={cls.input}
        readonly={readonly}
        onChange={onChangeLastname}
        data-testid="ProfileCard.lastname"
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
    </VStack>
  );
};
