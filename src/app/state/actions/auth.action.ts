import { createAction, props } from '@ngrx/store';
import { AUTH_ACTION_TYPES } from '../actionTypes/auth.actionType';
import { UserModel } from 'src/app/models/user.model';

export const signUp = createAction(
  AUTH_ACTION_TYPES.SIGN_UP,
  props<{ fullName: string; password: string; userName: string }>()
);

export const login = createAction(
  AUTH_ACTION_TYPES.LOGIN,
  props<{ password: string; userName: string }>()
);

export const userChecked = createAction(
  AUTH_ACTION_TYPES.USER_CHECKED,
  props<{
    user: UserModel | undefined;
    logged: boolean;
    token: string | undefined;
    loading: boolean;
  }>()
);

export const userLogged = createAction(
  AUTH_ACTION_TYPES.USER_LOGGED,
  props<{ user: UserModel; token: string; loading: boolean; logged: boolean }>()
);

export const checkAuth = createAction(AUTH_ACTION_TYPES.CHECK_AUTH);

export const setLoginError = createAction(
  AUTH_ACTION_TYPES.SET_LOGIN_ERROR,
  props<{
    user: UserModel | undefined;
    token: string | undefined;
    logged: boolean;
  }>()
);
