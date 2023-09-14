import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly = true,
  } = props;

  const { t } = useTranslation('profile');

  const options = [
    { value: Country.GERMANY, content: Country.GERMANY },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.UKRAINE, content: Country.UKRAINE },
    { value: Country.USA, content: Country.USA },
  ];

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={className}
      defaultValue={t('Your country')}
      label={t('Your country')}
      value={value}
      items={options}
      readonly={readonly}
      onChange={onChangeHandler}
      direction="top right"
    />
  );
});
