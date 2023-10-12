import { SensorModel } from './sensors.model';

export interface ClimateSensor extends SensorModel {
  data: DataClimateSensor[];
}

export interface DataClimateSensor {
  timestamp: number;
  temperature: number;
  humidity: number;
}
