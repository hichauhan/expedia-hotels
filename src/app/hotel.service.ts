import { Injectable } from '@angular/core';
import { Hotel } from './hotel';
import { HOTELS } from './mock-hotels';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  getHotels(): Observable<Hotel[]> {
    return of(HOTELS);
  }
}
