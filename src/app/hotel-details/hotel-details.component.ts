import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../hotel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotel: Hotel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hotelService: HotelService
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(id)
      .subscribe(hotel => this.hotel = hotel);
  }

  goBack(): void {
    this.location.back();
  }

}
