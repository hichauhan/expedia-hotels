import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from './hotel';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotelsUrl = 'api/hotels';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl)
      .pipe(
        tap(hotels => console.log("Fetched Hotels: " + hotels.length)),
        catchError(this.handleError('getHotels', []))
      );
  }

  getHotel(id: number): Observable<Hotel> {
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.get<Hotel>(url)
      .pipe(
        tap(_ => console.log(`Fetched Hotel:${id}`)),
        catchError(this.handleError<Hotel>(`get hotel id=${id}`))
      );
  }

  update(hotel: Hotel): Observable<any> {
    return this.http.put(this.hotelsUrl, hotel, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated hero: ${hotel.id}`)),
        catchError(this.handleError(`update hotel id=${hotel.id}`))
      );
  }
}
