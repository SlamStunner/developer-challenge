import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[];
  selectedCountry = new EventEmitter<Country>();

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService
      .getCounties()
      .subscribe((countries) => (this.countries = countries));
  }

  clickedCountry(country){
    this.countryService.selectedCountry.emit(country);
  }

}
