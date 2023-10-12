import { UserModel } from '../models/user.model';

export interface ILoginResponse {
  user: UserModel;
  token: string;
}
