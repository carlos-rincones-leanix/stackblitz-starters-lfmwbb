import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: fromUser.State) => state.users
);
