import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<any>(this.apiUrl + 'films/');
  }

  getFilm(id: number) {
    return this.http.get<any>(this.apiUrl + 'films/' + id);
  }

  // Add more methods to get other types of data from SWAPI
}
