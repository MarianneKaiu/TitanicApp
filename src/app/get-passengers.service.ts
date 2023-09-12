import { Injectable } from '@angular/core';
import { Passenger, TitanicPassengers } from './Data/titanic';

@Injectable({
  providedIn: 'root',
})
export class GetPassengersService {
  titanicPassengers = TitanicPassengers;

  constructor() {}

  get(): Passenger[] {
    return this.titanicPassengers;
  }

  age() {
    return this.titanicPassengers.map((passenger) => {
      return +passenger.Age;
    });
  }

  survived(deadOrAlive: string | undefined): Passenger[] {
    return this.titanicPassengers.filter((passenger) => {
      return passenger.Survived === deadOrAlive;
    });
  }
}
