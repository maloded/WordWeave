import { StateSchema } from 'app/providers/StoreProvider';
import { User } from '../../types/userSchema';

export const getUserAuthData = (state: StateSchema): User | undefined => state.user.authData;
