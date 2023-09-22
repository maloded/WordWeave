import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, userActions } from '@/entity/User';

interface LoginByUNProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUNProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);
      if (!response.data) throw new Error('No data');

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue('Somthing went wrong');
    }
  },
);
