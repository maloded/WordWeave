import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PageSchema } from '../types/PageSchema';

const initialState: PageSchema = {
  scroll: {},
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const {
  actions: pageActions,
  reducer: pageReducer,
} = pageSlice;
