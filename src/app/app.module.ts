import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsInputComponent } from './persons/persons-input.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './Navigation/nav.component';
import { HomeComponent } from './landing_page/home.component';
import { CountriesComponent } from './landing_page/listOfCountries.component';
import { CountryDetailsComponent } from './landing_page/country_details_page.component';
import { SearchPipe } from './landing_page/searchInput.pipe';
import { SelectInputPipe } from './landing_page/selectInput.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonsInputComponent,
    NavComponent,
    HomeComponent,
    CountriesComponent,
    CountryDetailsComponent,
    SearchPipe,
    SelectInputPipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
