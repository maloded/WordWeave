import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  decorators: [StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 27,
        country: Country.GERMANY,
        currency: Currency.EUR,
        city: 'Berlin',
        lastname: 'Ded',
        first: 'Dedushka',
        avatar: undefined,
      },
    },
  })],
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 27,
        country: Country.GERMANY,
        currency: Currency.EUR,
        city: 'Berlin',
        lastname: 'Ded',
        first: 'Dedushka',
        avatar: undefined,
      },
    },
  })],
  args: {},
};
