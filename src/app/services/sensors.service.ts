import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SensorModel } from '../models/sensors.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  private API_URL = 'http://localhost:3000/api/sensors';
  constructor(private http: HttpClient) {}

  getSensors(): Observable<SensorModel[]> {
    return this.http.get<SensorModel[]>(`${this.API_URL}/sensors`);
  }
}
