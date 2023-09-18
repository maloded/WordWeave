import { StateSchema } from '@/app/providers/StoreProvider';

export const getCanEditProfile = (
  state: StateSchema,
) => state.profile?.data?.id === state.user.authData?.id;
