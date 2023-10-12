import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../state/stores';
import { Store } from '@ngrx/store';
import { selectFullName } from '../state/selectors/auth.selector';
import { userChecked } from '../state/actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  fullName$: Observable<string | undefined> = new Observable();

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.fullName$ = this.store.select(selectFullName);
  }

  logOut() {
    localStorage.removeItem('token');
    this.store.dispatch(
      userChecked({ user: undefined, logged: false, token: '', loading: false })
    );
    this.router.navigate(['/login']);
  }
}
