import { SensorModel } from 'src/app/models/sensors.model';

export interface ISensorState {
  sensors: SensorModel[];
  loading: boolean;
}
