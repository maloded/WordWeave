import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Light: Story = {
  args: {
    label: 'Country',
    options: [
      { value: '111', content: 'first' },
      { value: '222', content: 'second' },
    ],
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    label: 'Country',
    options: [
      { value: '111', content: 'first' },
      { value: '222', content: 'second' },
    ],
  },
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    label: 'Country',
    options: [
      { value: '111', content: 'first' },
      { value: '222', content: 'second' },
    ],
  },
};
