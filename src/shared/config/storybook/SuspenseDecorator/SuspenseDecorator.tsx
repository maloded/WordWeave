import { type StoryFn } from '@storybook/react';
import { Suspense, JSX } from 'react';

export const SuspenseDecorator = (Story: StoryFn): JSX.Element => (
  <Suspense fallback={<div>...</div>}>
    <Story />
  </Suspense>
);
