import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCountryName'
})
export class GetCountryNamePipe implements PipeTransform {
  countries = [
    { country: 'United States', abbr: 'US'},
    { country: 'Canada', abbr: 'CA'}
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
