import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ForbiddenPage } from './ForbiddenPage';

const meta: Meta<typeof ForbiddenPage> = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};