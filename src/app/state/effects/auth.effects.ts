import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { AUTH_ACTION_TYPES } from '../actionTypes/auth.actionType';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../stores';
import { setLoginError } from '../actions/auth.action';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTION_TYPES.SIGN_UP),
      switchMap(({ fullName, password, userName }) => {
        return this.authService
          .registerUser({
            fullName: fullName,
            userName: userName,
            password: password,
          })
          .pipe(
            map((response) => ({
              type: AUTH_ACTION_TYPES.USER_CHECKED,
              user: response.user,
              token: response.token,
              logged: true,
              loading: false,
            })),
            catchError(() => EMPTY)
          );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTION_TYPES.LOGIN),
      switchMap(({ userName, password }) =>
        this.authService.loginUser({ userName, password }).pipe(
          map(({ token, user }) => {
            localStorage.setItem('token', token);
            this.router.navigate(['/']);
            return {
              type: AUTH_ACTION_TYPES.USER_LOGGED,
              token: token,
              loading: false,
              user: user,
              logged: true,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTION_TYPES.CHECK_AUTH),
      switchMap(() =>
        this.authService.checkAuth().pipe(
          map(({ logged, user }) => {
            return {
              type: AUTH_ACTION_TYPES.USER_LOGGED,
              loading: false,
              user,
              logged,
            };
          }),
          catchError(() => {
            this.store.dispatch(
              setLoginError({
                logged: false,
                token: undefined,
                user: undefined,
              })
            );
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
            return of();
          })
        )
      )
    )
  );
}
