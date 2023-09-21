import { JSX } from 'react';
import { type StoryFn } from '@storybook/react';
// eslint-disable-next-line ded-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (Story: StoryFn): JSX.Element => (
  <Story />
);
