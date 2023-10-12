import { Injectable } from '@angular/core';
import { AppState } from '../state/stores';
import { Store, select } from '@ngrx/store';
import { checkAuth } from '../state/actions/auth.action';
import { selectLoggedAuth } from '../state/selectors/auth.selector';
import { Observable, filter, first, map, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthLoggedGuard {
  logged$: Observable<boolean> = this.store.pipe(select(selectLoggedAuth));
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate() {
    if (!localStorage.getItem('token')) return true;

    return this.logged$.pipe(
      tap((logged) => {
        if (!logged) this.store.dispatch(checkAuth());
      }),
      filter((logged) => !!logged),
      map((logged) => {
        if (logged) {
          this.router.navigateByUrl('/');
          return false;
        }

        return true;
      }),
      first()
    );
  }
}
