import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entity/CommentList',
  component: CommentList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

const comments = [
  {
    id: '1',
    text: 'hey!',
    user: {
      id: '1',
      username: 'admin',
    },
  },
  {
    id: '2',
    text: 'bye again!',
    user: {
      id: '2',
      username: 'user',
    },
  },
];

export const Light: Story = {
  args: {
    comments,
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comments,
  },
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    comments,
  },
};

export const LightLoading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};

export const DarkLoading: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comments: [],
    isLoading: true,
  },
};

export const GreenLoading: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    comments: [],
    isLoading: true,
  },
};
