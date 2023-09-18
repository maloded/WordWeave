import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../Country/model/types/country';
import { Currency } from '../../../Currency/model/types/currency';

const meta: Meta<typeof ProfileCard> = {
  title: 'entity/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
  decorators: [],
  args: {
    data: {
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
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    data: {
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
};

export const LightEditing: Story = {
  decorators: [],
  args: {
    data: {
      username: 'admin',
      age: 27,
      country: Country.GERMANY,
      currency: Currency.EUR,
      city: 'Berlin',
      lastname: 'Ded',
      first: 'Dedushka',
      avatar: undefined,
    },
    readonly: false,
  },
};

export const Loading: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    error: 'Error',
  },
};
