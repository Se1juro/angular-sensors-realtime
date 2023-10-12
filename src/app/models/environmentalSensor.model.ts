import { SensorModel } from './sensors.model';

export interface EnvironmentalSensor extends SensorModel {
  data: DataEnvironmentalSensor[];
}

export interface DataEnvironmentalSensor {
  timestamp: number;
  noise_level: number;
  air_quality: number;
}
