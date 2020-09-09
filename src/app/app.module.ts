import { CountryService } from './country.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { CountryFlagComponent } from './country/country-flag/country-flag.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryFlagComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
