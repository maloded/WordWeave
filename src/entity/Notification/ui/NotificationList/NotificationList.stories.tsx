import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
  title: 'entity/Notification/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'New Article: Cybersecurity Best Practices',
            description: 'Stay updated on the latest cybersecurity best practices and protect your systems.',
          },
          {
            id: '2',
            title: 'New Article: Cybersecurity Best Practices',
            description: 'Stay updated on the latest cybersecurity best practices and protect your systems.',
          },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

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
