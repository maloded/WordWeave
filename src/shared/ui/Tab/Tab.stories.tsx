import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'shared/Tab',
  component: Tab,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Light: Story = {
  args: {
    value: '222',
    onTabClick: action('onTabClick'),
    tabs: [
      { value: '111', content: '111' },
      { value: '222', content: '222' },
    ],
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    value: '222',
    onTabClick: action('onTabClick'),
    tabs: [
      { value: '111', content: '111' },
      { value: '222', content: '222' },
    ],
  },
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    value: '222',
    onTabClick: action('onTabClick'),
    tabs: [
      { value: '111', content: '111' },
      { value: '222', content: '222' },
    ],
  },
};
