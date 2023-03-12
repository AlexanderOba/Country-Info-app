import { Pipe, PipeTransform } from '@angular/core';
import { country } from './listOfCountries.component';

@Pipe({
  name: 'appFilter',
})
export class SearchPipe implements PipeTransform {
  transform(countryList: country[], country_name: string): any[] {
    if (!country_name) {
      return countryList;
    }
    return countryList.filter(
      (x: any) =>
        x.name.common
          .toString()
          .toLowerCase()
          .indexOf(country_name.toLowerCase()) > -1
    );
  }
}
