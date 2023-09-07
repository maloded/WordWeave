import { Comment } from 'entity/Comment';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

const initialState: AddCommentFormSchema = {
  text: '',
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCommentsByArticleId.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(
  //       fetchCommentsByArticleId.fulfilled,
  //       (state, action: PayloadAction<Array<Comment>>) => {
  //         state.isLoading = false;
  //         commentsAdapter.setAll(state, action.payload);
  //       },
  //     )
  //     .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice;
