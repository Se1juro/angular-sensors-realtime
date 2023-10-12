import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../state/stores';
import { Store } from '@ngrx/store';
import { selectFullName } from '../state/selectors/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  fullName$: Observable<string | undefined> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fullName$ = this.store.select(selectFullName);
  }
}
