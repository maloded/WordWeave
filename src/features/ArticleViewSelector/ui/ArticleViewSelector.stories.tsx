import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { action } from '@storybook/addon-actions';
import { ArticleView } from 'entity/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
  tags: ['autodocs'],
  args: {
    onViewClick: action(ArticleView.BIG),
  },
};
export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const LightSmall: Story = {
  decorators: [],
  args: {
    view: ArticleView.SMALL,
  },
};

export const DarkSmall: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    view: ArticleView.SMALL,
  },
};

export const GreenSmall: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    view: ArticleView.SMALL,
  },
};

export const LightBig: Story = {
  decorators: [],
  args: {
    view: ArticleView.BIG,
  },
};

export const DarkBig: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    view: ArticleView.BIG,
  },
};

export const GreenBig: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    view: ArticleView.BIG,
  },
};
