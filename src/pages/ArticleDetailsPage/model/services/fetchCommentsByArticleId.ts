import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entity/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Array<Comment>, string | undefined, ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
      return rejectWithValue('Somthing went wrong');
    }

    try {
      const response = await extra.api.get<Array<Comment>>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) throw new Error();

      return response.data;
    } catch (error) {
      return rejectWithValue('Somthing went wrong');
    }
  },
);
