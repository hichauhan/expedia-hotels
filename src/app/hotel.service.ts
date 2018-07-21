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
        tap(_ => console.log(`updated Hotel: ${hotel.id}`)),
        catchError(this.handleError(`update hotel id=${hotel.id}`))
      );
  }

  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.hotelsUrl, hotel, this.httpOptions)
      .pipe(
        tap((hotel: Hotel) => console.log(`added Hotel: ${hotel.id}`),
        catchError(this.handleError(`add hotel`))
      ));
  }

  deleteHotel(hotel: Hotel): Observable<any> {
    const id = hotel.id;
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.delete<Hotel>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`deleted hotel: ${hotel.id}`)),
        catchError(this.handleError(`delete Hotel`))
      );
  }

  searchHotels(term: string): Observable<Hotel[]> {
    if (!term.trim()) {
      // if not search term, return empty hotel array.
      return of([]);
    }
    return this.http.get<Hotel[]>(`${this.hotelsUrl}/?name=${term}`).pipe(
      tap(_ => console.log(`found hotels matching "${term}"`)),
      catchError(this.handleError<Hotel[]>('searchHotels', []))
    );
  }
}
