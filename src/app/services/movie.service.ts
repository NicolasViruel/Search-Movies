import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/Movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //key 41690a81
  private API_URL: string = 'https://www.omdbapi.com/?apikey=41690a81'

  constructor( private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    // return this.http.get(this.API_URL + '&s=' + searchTerm); //una forma de llamar seria esta
    return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search;  
    })
      );
  }


}
