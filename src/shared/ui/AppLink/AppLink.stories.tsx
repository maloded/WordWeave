import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    variant: 'primary',
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    variant: 'primary',
  },
};


export const PrimaryGreen: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    children: 'Text',
    variant: 'primary',
  },
};
