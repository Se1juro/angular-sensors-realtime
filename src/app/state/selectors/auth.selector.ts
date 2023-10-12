import { createSelector } from '@ngrx/store';
import { AppState } from '../stores';
import { IUserState } from '../stateTypes/auth.type';

export const selectAuthFeature = (state: AppState) => state.auth;

export const selectLoggedAuth = createSelector(
  selectAuthFeature,
  (state: IUserState) => state.logged
);

export const selectFullName = createSelector(
  selectAuthFeature,
  (state: IUserState) => state.user?.fullName
);
