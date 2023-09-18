import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return form', () => {
    const form = {
      username: 'admin',
      age: 27,
      country: Country.GERMANY,
      currency: Currency.EUR,
      city: 'Berlin',
      lastname: 'Ded',
      first: 'Dedushka',
      avatar: undefined,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
