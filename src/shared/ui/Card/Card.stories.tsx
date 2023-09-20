import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <Text title="Hello my friend" text="You are very smart" />,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

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
