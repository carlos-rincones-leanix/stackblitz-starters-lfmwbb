import { Component, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { DogEffects } from './effects/dog.effects';
import { dogReducer } from './reducers/dog.reducer';
import { DogListComponent } from './components/dog-list.component';
import { UserListComponent } from './components/user-list.component';
import { userReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <h1>Dogs</h1>
      <app-dog-list></app-dog-list>
    </div>
    <div>
      <h1>Users</h1>
      <app-user-list></app-user-list>
    </div>
  `,
  imports: [DogListComponent, UserListComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideStore({ dogs: dogReducer, users: userReducer }),
    provideEffects([DogEffects, UserEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
});
