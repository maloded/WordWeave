import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entity/Currency';
import { Country, CountrySelect } from '@/entity/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
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
    onChangeFirstname,
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
      <Card max className={classNames(cls.ProfileCard, {}, [className])}>
        <VStack gap="32">
          <HStack max justify="center">
            <Skeleton border="100%" width={128} height={128} />
          </HStack>
          <HStack gap="32" max>
            <VStack gap="16" max>
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>

            <VStack gap="16" max>
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>
          </HStack>
        </VStack>
      </Card>
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

  return (
    <Card max className={classNames(cls.ProfileCard, {}, [className])}>
      <VStack gap="32">
        <HStack justify="center" max>
          <Avatar src={data?.avatar} size={128} />
        </HStack>
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Input
              value={data?.first}
              label={t('Your name')}
              readonly={readonly}
              onChange={onChangeFirstname}
              data-testid="ProfileCard.firstname"
            />
            <Input
              value={data?.lastname}
              label={t('Your lastname')}
              readonly={readonly}
              onChange={onChangeLastname}
              data-testid="ProfileCard.lastname"
            />
            <Input
              value={data?.age}
              label={t('Your age')}
              readonly={readonly}
              onChange={onChangeAge}
            />
            <Input
              value={data?.city}
              label={t('Your Sity')}
              readonly={readonly}
              onChange={onChangeCity}
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              value={data?.username}
              label={t('Your username')}
              readonly={readonly}
              onChange={onChangeUsername}
            />
            <Input
              value={data?.avatar}
              label={t('Your avatar')}
              readonly={readonly}
              onChange={onChangeAvatar}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>


    </Card>
  );
};
