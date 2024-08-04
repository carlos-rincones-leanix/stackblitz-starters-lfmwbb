import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.model';
import * as fromDog from '../selectors/dog.selectors';
import * as DogActions from '../actions/dog.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  dogs$: Observable<Dog[]>;
  toys = [
    'Ball',
    'Frisbee',
    'Squeaky Toy',
    'Rope Toy',
    'Chew Toy',
    'Plush Toy',
    'Tug Toy',
    'Bone',
    'Kong Toy',
  ];

  constructor(private store: Store) {
    this.dogs$ = this.store.select(fromDog.selectAllDogs);
  }

  ngOnInit(): void {
    this.store.dispatch(DogActions.loadDogs());
  }

  toggleFavorite(dogId: string): void {
    this.store.dispatch(DogActions.toggleFavorite({ dogId }));
  }

  updateFavoriteToy(dogId: string): void {
    const favoriteToy = this.getRandomToy();
    this.store.dispatch(DogActions.updateFavoriteToy({ dogId, favoriteToy }));
  }

  getRandomToy(): string {
    const randomIndex = Math.floor(Math.random() * this.toys.length);
    return this.toys[randomIndex];
  }
}
