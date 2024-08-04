import { Dog } from './dog.model';

export interface User {
  id: string;
  name: string;
  dogs: Dog[];
}
