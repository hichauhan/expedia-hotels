import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';

import { HOTELS } from '../mock-hotels';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels = HOTELS;
  selectedHotel;

  constructor() { }

  ngOnInit() {
  }

  selectHotel(hotel): void {
    this.selectedHotel = hotel;
  }

}
