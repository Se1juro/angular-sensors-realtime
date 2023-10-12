import { createSelector } from '@ngrx/store';
import { AppState } from '../stores';
import { ISensorState } from '../stateTypes/sensors.type';

export const selectSensorsFeature = (state: AppState) => state.sensors;

export const selectListSensors = createSelector(
  selectSensorsFeature,
  (state: ISensorState) => state.sensors
);

export const selectLoading = createSelector(
  selectSensorsFeature,
  (state: ISensorState) => state.loading
);
