import { ActionReducerMap } from '@ngrx/store';
import { sensorsReducer } from './reducers/sensors.reducer';
import { ISensorState } from './stateTypes/sensors.type';
import { IUserState } from './stateTypes/auth.type';
import { authReducer } from './reducers/auth.reducer';

export interface AppState {
  sensors: ISensorState;
  auth: IUserState;
}
export const STORES: ActionReducerMap<AppState> = {
  sensors: sensorsReducer,
  auth: authReducer,
};
