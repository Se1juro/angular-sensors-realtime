import { SensorModel } from './sensors.model';

export interface WeatherSensor extends SensorModel {
  data: DataWeatherSensor[];
}

export interface DataWeatherSensor {
  timestamp: number;
  pressure: number;
  wind_speed: number;
}
