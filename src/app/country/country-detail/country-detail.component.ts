import { Country } from './../country.model';
import { CountryService } from 'src/app/country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  selectedCountry: Country;

  public show:boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.selectedCountry.subscribe((country: Country) => {
      this.selectedCountry = country;
    });
  }

  toggle(): void{
    this.show = !this.show;
    console.log(this.show);
  }

}
