import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'entity/Notification/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  args: {
    item: {
      id: '1',
      title: 'New Article: Cybersecurity Best Practices',
      description: 'Stay updated on the latest cybersecurity best practices and protect your systems.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

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
