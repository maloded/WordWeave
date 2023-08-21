import { BrowserRouter } from 'react-router-dom';
import { JSX } from 'react';
import { type StoryFn } from '@storybook/react';

export const RouterDecorator = (Story: StoryFn): JSX.Element => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
