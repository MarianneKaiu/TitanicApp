import { Component, OnInit } from '@angular/core';
import { GetPassengersService } from './get-passengers.service';
import { Passenger } from './Data/titanic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-TitanicS';

  titanicPassengers!: Passenger[];
  quantity!: number;
  ages!: number[];
  moyAgeS!: number;
  j: number = 0;
  passengerList: boolean = false;
  deadOrAlive?: string;

  constructor(private getPassengerS: GetPassengersService) {}

  ngOnInit() {
    this.quantity = this.getPassengerS.get().length;
    console.log(this.quantity);

    this.ages = this.getPassengerS.age();

    this.moy(this.ages);

    this.moyAgeS = Math.round(this.j / this.ages.length);
  }
  moy(ages: number[]) {
    for (let i = 0; i < this.ages.length; i++) this.j = this.j + ages[i];
  }
}
