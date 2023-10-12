import { createReducer, on } from '@ngrx/store';
import { loadSensors, loadedSensors } from '../actions/sensors.action';
import { ISensorState } from '../stateTypes/sensors.type';

export const initialState: ISensorState = {
  sensors: [],
  loading: false,
};

export const sensorsReducer = createReducer(
  initialState,
  on(loadSensors, (state) => ({ ...state, loading: true })),
  on(loadedSensors, (state, { sensors }) => {
    return {
      ...state,
      sensors,
      loading: false,
    };
  })
);
