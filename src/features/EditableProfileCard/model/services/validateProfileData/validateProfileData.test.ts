import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '@/entity/Profile';

describe('validateProfileData', () => {
  test('success', async () => {
    const data = {
      username: 'admin',
      age: 27,
      country: Country.GERMANY,
      currency: Currency.EUR,
      city: 'Berlin',
      lastname: 'Ded',
      first: 'Dedushka',
      avatar: undefined,
    };

    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('incorrect age and missing lastname', async () => {
    const data = {
      username: 'admin',
      age: NaN,
      country: Country.GERMANY,
      currency: Currency.EUR,
      city: 'Berlin',
      lastname: '',
      first: 'Dedushka',
      avatar: undefined,
    };

    const result = validateProfileData(data);

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('without data', async () => {
    const result = validateProfileData(undefined);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
