import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Empty: Story = {
  args: {},
};

export const Normal: Story = {
  args: {
    src: AvatarImg,
  },
};

export const Size100px: Story = {
  args: {
    size: 100,
  },
};
