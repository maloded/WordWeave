import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: 'Введите текст',
    value: 'Text',
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    placeholder: 'Введите текст',
    value: 'Text',
  },
};

export const Green: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    placeholder: 'Введите текст',
    value: 'Text',
  },
};
