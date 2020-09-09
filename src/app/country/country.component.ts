import { Country } from './country.model';
import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
