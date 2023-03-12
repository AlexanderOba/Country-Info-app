import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service';
import { ActivatedRoute } from '@angular/router';


export interface countryDetails{
  flags: any,
  name: any,
  native_name: string,
  population: number,
  region: string,
  capital: string,
  top_level_domain: string,
  currencies: number,
  languages: any,
  subregion: string,
  tld: string,
  borders: string[],
}
@Component({
  selector: 'app-country-details',
  templateUrl: './country_details_page.component.html',
  styleUrls:["./home.component.css"]
})

export class CountryDetailsComponent implements OnInit{
 
  public countryDets: countryDetails[];
         isFetching = false;
         borders?: string[];

  constructor(private countryInfo: HomeService, private route: ActivatedRoute){}
 
  ngOnInit(){
    let name= this.route.snapshot.params['name']
    
    console.log("country name is :",name)

    this.countryInfo.fetchCountryInfo(name).subscribe( resData => {
      this.countryDets = resData;
      this.borders = this.countryDets[0].borders
      this.isFetching = false;
      console.log(resData);
  })
    this.isFetching = true; 
  }
}