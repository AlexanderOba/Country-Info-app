import { Pipe, PipeTransform } from '@angular/core';
import { country } from './listOfCountries.component';

@Pipe({
  name: 'regionFilter',
})
export class SelectInputPipe implements PipeTransform {
  transform(countryList: country[], country_region: string): any[] {
    if (!country_region || country_region === 'all_countries') {
      return countryList;
    }
    return countryList.filter((x: any) => x.region === country_region);
  }
}
