import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSensors } from '../state/actions/sensors.action';
import { Observable } from 'rxjs';
import {
  selectListSensors,
  selectLoading,
} from '../state/selectors/sensors.selector';
import { AppState } from '../state/stores';
import { SensorModel } from '../models/sensors.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  sensors$: Observable<SensorModel[]> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadSensors());
    this.sensors$ = this.store.select(selectListSensors);
  }
}
