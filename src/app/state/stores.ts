import { ActionReducerMap } from '@ngrx/store';
import { sensorsReducer } from './reducers/sensors.reducer';
import { ISensorState } from './stateTypes/sensors.type';

export interface AppState {
  sensors: ISensorState;
}
export const STORES: ActionReducerMap<AppState> = {
  sensors: sensorsReducer,
};
