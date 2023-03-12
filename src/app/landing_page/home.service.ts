import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { countryDetails } from "./country_details_page.component";
import { country } from "./listOfCountries.component";


@Injectable({
    providedIn: 'root'
})
export class HomeService{

   constructor(private http: HttpClient){}
   
   fetchCountries(): Observable<country[]>{
    return this.http.get<country[]>('https://restcountries.com/v3.1/all')
   }

   fetchCountryInfo(name: any): Observable<countryDetails[]>{
    return this.http.get<countryDetails[]>(`https://restcountries.com/v3.1/name/${name}`)
   }
}

//while @component is written before declaring a component @injectable is used befor writing a service class