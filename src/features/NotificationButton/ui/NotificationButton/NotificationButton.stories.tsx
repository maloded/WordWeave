import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
  title: 'features/NotificationButton',
  component: NotificationButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {},
};
