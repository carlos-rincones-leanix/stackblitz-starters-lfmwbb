import { createReducer, on } from '@ngrx/store';
import { Dog } from '../models/dog.model';
import * as DogActions from '../actions/dog.actions';

export interface State {
  dogs: Dog[];
  error: any;
}

export const initialState: State = {
  dogs: [],
  error: null,
};

export const dogReducer = createReducer(
  initialState,
  on(DogActions.loadDogsSuccess, (state, { dogs }) => ({ ...state, dogs })),
  on(DogActions.loadDogsFailure, (state, { error }) => ({ ...state, error })),
  on(DogActions.toggleFavorite, (state, { dogId }) => {
    const updatedDogs = state.dogs.map((dog) =>
      dog.id === dogId ? { ...dog, isFavorite: !dog.isFavorite } : dog
    );
    return { ...state, dogs: updatedDogs };
  }),
  on(DogActions.updateFavoriteToy, (state, { dogId, favoriteToy }) => {
    const updatedDogs = state.dogs.map((dog) =>
      dog.id === dogId ? { ...dog, favoriteToy } : dog
    );
    return { ...state, dogs: updatedDogs };
  })
);
