import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User } from '../types/userSchema';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(
        getUserDataByIdQuery(userId),
      ).unwrap();

      return response;
    } catch (e) {
      return rejectWithValue('');
    }
  },
);