import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entity/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const comment = {
  id: '1',
  text: 'hey!',
  user: {
    id: '1',
    username: 'Dima',
  },
};

export const Light: Story = {
  args: {
    comment,
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comment,
  },
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    comment,
  },
};

export const Loading: Story = {
  decorators: [],
  args: {
    comment: undefined,
    isLoading: true,
  },
};

export const LoadingDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comment: undefined,
    isLoading: true,
  },
};

export const LoadingGreen: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    comment: undefined,
    isLoading: true,
  },
};
