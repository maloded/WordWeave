import { Profile } from 'entity/Profile';
import { ValidateProfileError } from '../consts/ValidateProfileError';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: Array<ValidateProfileError>;
}
