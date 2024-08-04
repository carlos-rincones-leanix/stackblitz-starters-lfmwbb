import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as DogActions from '../actions/dog.actions';
import { ApiService } from '../services/api.service';

@Injectable()
export class DogEffects {
  loadDogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogActions.loadDogs),
      mergeMap(() =>
        this.apiService.getAll().pipe(
          map(({ dogs }) => DogActions.loadDogsSuccess({ dogs })),
          catchError((error) => of(DogActions.loadDogsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
