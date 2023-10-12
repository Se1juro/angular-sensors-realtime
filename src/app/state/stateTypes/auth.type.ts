import { SensorModel } from 'src/app/models/sensors.model';
import { UserModel } from 'src/app/models/user.model';

export interface IUserState {
  user: UserModel | undefined;
  token: string | undefined;
  loading: boolean;
  logged: boolean;
}
