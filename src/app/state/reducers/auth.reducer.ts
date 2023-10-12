import { createReducer, on } from '@ngrx/store';
import { IUserState } from '../stateTypes/auth.type';
import {
  checkAuth,
  signUp,
  userChecked,
  userLogged,
} from '../actions/auth.action';

export const initialState: IUserState = {
  user: undefined,
  loading: false,
  token: '',
  logged: false,
};

export const authReducer = createReducer(
  initialState,
  on(signUp, (state, {}) => {
    return { ...state, loading: true };
  }),
  on(userChecked, (state, { token, user, loading, logged }) => {
    if (token) localStorage.setItem('token', token);
    if (!logged) localStorage.removeItem('token');
    return { ...state, loading, logged, user, token };
  }),
  on(userLogged, (state, { token, user, loading, logged }) => {
    if (token) localStorage.setItem('token', token);
    if (!logged) localStorage.removeItem('token');
    return { ...state, loading, logged, user, token };
  })
);
