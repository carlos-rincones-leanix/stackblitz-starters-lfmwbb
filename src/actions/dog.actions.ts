import { createAction, props } from '@ngrx/store';
import { Dog } from '../models/dog.model';

export const loadDogs = createAction('[Dog List] Load Dogs');
export const loadDogsSuccess = createAction(
  '[Dog List] Load Dogs Success',
  props<{ dogs: Dog[] }>()
);
export const loadDogsFailure = createAction(
  '[Dog List] Load Dogs Failure',
  props<{ error: any }>()
);

export const toggleFavorite = createAction(
  '[Dog List] Toggle Favorite',
  props<{ dogId: string }>()
);
export const updateFavoriteToy = createAction(
  '[Dog List] Update Favorite Toy',
  props<{ dogId: string; favoriteToy: string }>()
);
