import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleRating } from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

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
