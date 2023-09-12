import { Component, OnInit } from '@angular/core';
import { Passenger } from '../Data/titanic';
import { GetPassengersService } from '../get-passengers.service';

@Component({
  selector: 'app-survivors',
  // templateUrl: './survivors.component.html',
  templateUrl: './survivors.component.html',
  styleUrls: ['./survivors.component.scss'],
})
export class SurvivorsComponent implements OnInit {
  titanicPassengers!: Passenger[];
  constructor(private getPassengerS: GetPassengersService) {}
  quantity!: number;

  ngOnInit(): void {
    this.titanicPassengers = this.getPassengerS.get();
    this.quantity = this.getPassengerS.get().length;
  }
}
