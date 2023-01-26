import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCountryName'
})
export class GetCountryNamePipe implements PipeTransform {
  countries = [
    { country: 'United States', abbr: 'US'},
    { country: 'Canada', abbr: 'CA'},
    { country: 'Japan', abbr: 'JP'},
    { country: 'France', abbr: 'FR'},
    { country: 'Italy', abbr: 'IT'},
    { country: 'Australia', abbr: 'AU'},
    { country: 'New Zealand', abbr: 'NZ'},
    { country: 'Switzerland', abbr: 'CH'},
    { country: 'Austria', abbr: 'AT'}
    
  ]
  transform(countryAbbr: string): string {
    for (const c in this.countries) {
      if (countryAbbr === this.countries[c].abbr) {
        return this.countries[c].country;
      }
    }
    return countryAbbr;
  }
}
