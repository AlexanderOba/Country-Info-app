import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { countryDetails } from './country_details_page.component';

export interface country {
  name: any;
  flags: any;
  population: number;
  region: string;
  capital: string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './listOfCountries.component.html',
  styleUrls: ['./listOfCountries.component.css'],
})

export class CountriesComponent implements OnInit {
  public countryList: country[];
  @Input() country_name: string;  //country_name property is coming from home.component.ts file
  @Input() country_region: string
  isFetching = false;

  constructor(private cntryList: HomeService, private router: Router) {}

  onSelected(country: any) {
    this.router.navigate(['/country_details_page', country.name.common]);
  }
  ngOnInit() {
    this.cntryList.fetchCountries().subscribe((resData) => {
      this.countryList = resData;
      this.isFetching = false;
      console.log(resData);
    });
    this.isFetching = true;
  }
}
