import { Country } from './country/country.model';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})


export class CountryService {
  baseUrl = environment.apiUrl;
  selectedCountry = new EventEmitter<Country>();

  constructor(private http: HttpClient) {}

  getCounties(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl);
  }
}
