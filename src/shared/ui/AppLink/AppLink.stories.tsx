import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryGreen: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const SecondaryGreen: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};
