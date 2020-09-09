import { CountryService } from 'src/app/country.service';
import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country.model';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss']
})
export class CountryFlagComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  @Input() country: Country;

  ngOnInit(): void {
    // this.countryService.selectedCountry.subscribe((country: Country) => {
    //   this.country = country;
    // });
  }

}
