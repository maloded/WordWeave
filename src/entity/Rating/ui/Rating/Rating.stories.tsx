import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Rating } from './Rating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Rating> = {
  title: 'entity/Rating',
  component: Rating,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const LightRated: Story = {
  args: {
    rate: 4,
  },
};

export const DarkWithTitle: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: 'Your feedback',
    rate: 0,
  },
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {},
};
