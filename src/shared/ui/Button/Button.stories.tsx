import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'l',
  },
};

export const OutlineXL: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
  },
};

export const OutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    variant: 'outline',
  },
};

export const OutlineGreen: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    children: 'Text',
    variant: 'outline',
  },
};

export const Square: Story = {
  args: {
    children: '>',
    variant: 'outline',
    square: true,
  },
};

export const Disabled: Story = {
  args: {
    children: '>',
    variant: 'outline',
    disabled: true,
  },
};
