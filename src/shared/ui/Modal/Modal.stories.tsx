import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
      Soluta quaerat voluptate voluptatem. Aliquam id culpa totam cupiditate 
      repellat vitae quo veritatis molestias consequatur at rem nobis neque 
      similique dolores cupiditate modi iure assumenda provident, ipsam quaerat.`,
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    isOpen: true,
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
      Soluta quaerat voluptate voluptatem. Aliquam id culpa totam cupiditate 
      repellat vitae quo veritatis molestias consequatur at rem nobis neque 
      similique dolores cupiditate modi iure assumenda provident, ipsam quaerat.`,
  },
};

export const PrimaryGreen: Story = {
  decorators: [ThemeDecorator(Theme.GREEN)],
  args: {
    isOpen: true,
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
      Soluta quaerat voluptate voluptatem. Aliquam id culpa totam cupiditate 
      repellat vitae quo veritatis molestias consequatur at rem nobis neque 
      similique dolores cupiditate modi iure assumenda provident, ipsam quaerat.`,
  },
};
