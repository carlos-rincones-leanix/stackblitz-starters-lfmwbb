import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../models/user.model';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private dogs: Dog[] = [
    { id: '1', name: 'Buddy', favoriteToy: 'Ball', isFavorite: false },
    { id: '2', name: 'Max', favoriteToy: 'Frisbee', isFavorite: true },
  ];
  private users: User[] = [
    {
      id: '1',
      name: 'Alice',
      dogs: [this.dogs[0]],
    },
    {
      id: '2',
      name: 'Bob',
      dogs: [this.dogs[1]],
    },
  ];

  getAll() {
    return of({
      dogs: this.dogs,
      users: this.users,
    });
  }
}
