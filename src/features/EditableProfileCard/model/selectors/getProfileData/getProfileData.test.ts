import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
