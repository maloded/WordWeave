import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  args: {
    value: 'nums',
    items: [
      {
        content: '11111111111', value: '111',
      },
      {
        content: '22222222222', value: '222',
      },
    ],
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const LightTopLeft: Story = {
  args: {
    direction: 'top left',
  },
};

export const LightTopRight: Story = {
  args: {
    direction: 'top right',
  },
};

export const DarkBottomLeft: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    direction: 'bottom left',
  },
};

export const GreenBottomRight: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    direction: 'bottom right',
  },
};
