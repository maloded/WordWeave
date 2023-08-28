import { DeepPartial } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);
