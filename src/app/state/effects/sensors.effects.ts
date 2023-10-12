import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SensorsService } from 'src/app/services/sensors.service';
import { AppState } from '../stores';
import { Store } from '@ngrx/store';
import { SENSORS_ACTION_TYPES } from '../actionTypes/sensors.actionTypes';
import { EMPTY, catchError, map, switchMap } from 'rxjs';

@Injectable()
export class SensorsEffects {
  constructor(
    private actions$: Actions,
    private sensorService: SensorsService,
    private store: Store<AppState>
  ) {}

  loadSensors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SENSORS_ACTION_TYPES.GET_SENSORS),
      switchMap(() =>
        this.sensorService.getSensors().pipe(
          map((sensors) => {
            return {
              type: SENSORS_ACTION_TYPES.LOADED_SENSORS,
              sensors: sensors, // Asegúrate de utilizar los sensores obtenidos de la API aquí
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
