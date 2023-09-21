import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type {
  StateSchema,
  ManagedReduxStore,
  ThunkConfig,
  StateSchemaKey,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ManagedReduxStore,
  ThunkConfig,
  StateSchemaKey,
};

export type { AppDispatch } from './types/AppDispatch';
