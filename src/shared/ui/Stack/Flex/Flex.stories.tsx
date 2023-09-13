import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const LightEmty: Story = {};

export const LightGap4: Story = {
  args: {
    gap: '4',
  },
};

export const DarkGap8: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    gap: '8',
  },
};

export const GreenGap16: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    gap: '16',
  },
};

export const GreenGap32: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    gap: '32',
  },
};

export const DarkColumn: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    direction: 'column',
  },
};

export const GreenColumnGap16: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    direction: 'column',
    gap: '16',
  },
};

export const LightJustifyCenterGap4: Story = {
  args: {
    gap: '4',
    justify: 'center',
  },
};

export const DarkJustifyBetween: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    justify: 'between',
  },
};

export const GreenJustifyEndGap16: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    gap: '16',
    justify: 'end',
  },
};

export const GreenJustifyEndAlignEndGap32: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    gap: '32',
    align: 'end',
  },
};
