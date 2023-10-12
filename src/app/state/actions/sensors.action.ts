import { createAction, props } from '@ngrx/store';
import { SENSORS_ACTION_TYPES } from '../actionTypes/sensors.actionTypes';
import { SensorModel } from 'src/app/models/sensors.model';

export const loadSensors = createAction(SENSORS_ACTION_TYPES.GET_SENSORS);

export const loadedSensors = createAction(
  SENSORS_ACTION_TYPES.LOADED_SENSORS,
  props<{ sensors: SensorModel[] }>()
);

export const getOperation = createAction(
  SENSORS_ACTION_TYPES.CALCULATE_OPERATION,
  props<{ sensors: SensorModel[] }>()
);
