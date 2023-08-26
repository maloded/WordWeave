import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateScheme {
  counter: CounterSchema;
  user: UserSchema;
}
