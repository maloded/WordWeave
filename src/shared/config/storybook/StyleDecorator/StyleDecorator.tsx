import { JSX } from 'react';
import { type StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (Story: StoryFn): JSX.Element => (
  <Story />
);
