import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entity/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Array<Article>, void, ThunkConfig<string>
>(
  'articleDetails/fetchArticleRecommendations',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Array<Article>>('/articles', {
        params: {
          _expand: 'user',
          _limit: 4,
        },
      });

      if (!response.data) throw new Error();

      return response.data;
    } catch (error) {
      return rejectWithValue('Somthing went wrong');
    }
  },
);
