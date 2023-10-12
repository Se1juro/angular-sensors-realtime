import { UserModel } from '../models/user.model';

export interface ILoggedInterface {
  logged: boolean;
  user: UserModel;
}
