import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDog from '../reducers/dog.reducer';

export const selectDogState = createFeatureSelector<fromDog.State>('dogs');

export const selectAllDogs = createSelector(
  selectDogState,
  (state: fromDog.State) => state.dogs
);
