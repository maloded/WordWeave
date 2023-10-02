import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'TitleTitle',
    text: 'TextTextText',
  },
};

export const PrimarySizeS: Story = {
  args: {
    title: 'TitleTitle',
    text: 'TextTextText',
    size: 's',
  },
};

export const PrimarySizeL: Story = {
  args: {
    title: 'TitleTitle',
    text: 'TextTextText',
    size: 'l',
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: 'TitleTitle',
    text: 'TextTextText',
  },
};

export const PrimatyGreen: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    title: 'TitleTitle',
    text: 'TextTextText',
  },
};

export const Accent: Story = {
  args: {
    title: 'TitleTitle',
    text: 'TextTextText',
    variant: 'accent',
  },
};

export const Error: Story = {
  args: {
    title: 'TitleTitle',
    text: 'TextTextText',
    variant: 'error',
  },
};
