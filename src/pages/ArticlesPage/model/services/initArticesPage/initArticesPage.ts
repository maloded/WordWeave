import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageWasInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const inited = getArticlesPageWasInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({
        page: 1,
      }));
    }
  },
);
