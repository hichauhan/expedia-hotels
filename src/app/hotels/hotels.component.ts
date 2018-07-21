import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
      this.hotelService.getHotels()
        .subscribe(hotels => this.hotels = hotels);
  }

  addHotel(name: String): void {
    name = name.trim();
    if (!name) return;
    this.hotelService.addHotel({name} as Hotel)
      .subscribe(hotel => this.hotels.push(hotel));
  }

}
