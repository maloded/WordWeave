import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    trigger: <Button>Open</Button>,
    children: 'first',
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

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
