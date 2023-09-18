import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly = true,
  } = props;

  const { t } = useTranslation('profile');

  const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.GRN, content: Currency.GRN },
    { value: Currency.EUR, content: Currency.EUR },
  ];

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      className={className}
      defaultValue={t('Your currency')}
      label={t('Your currency')}
      value={value}
      items={options}
      readonly={readonly}
      onChange={onChangeHandler}
      direction="top right"
    />
  );
});
