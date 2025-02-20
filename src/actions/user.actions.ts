import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

const a = 'glgl';

export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User List] Load Users Failure',
  props<{ error: any }>()
);
export const markedOwnedDogAsFavorite = createAction(
  '[User List] Load Users Failure',
  props<{ error: any }>()
);
