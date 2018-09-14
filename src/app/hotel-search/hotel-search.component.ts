import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  hotels$: Observable<Hotel[]>;
  private searchTerms = new Subject<string>();

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotels$ = this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after each keystroke
      distinctUntilChanged(), // ignore same values
      switchMap((term: string) => this.hotelService.searchHotels(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
