import { Component, OnInit } from '@angular/core';
import { Passenger } from '../Data/titanic';
import { GetPassengersService } from '../get-passengers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  titanicPassengers!: Passenger[];
  quantity!: number;

  constructor(private getPassengerS: GetPassengersService) {}

  getSurvivors(survivedValue: string) {
    this.titanicPassengers = this.getPassengerS.survived(survivedValue);
    this.quantity = this.getPassengerS.survived(survivedValue).length;
  }
  all() {
    this.titanicPassengers = this.getPassengerS.get();
    this.quantity = this.getPassengerS.get().length;
  }
  ngOnInit(): void {}
}
