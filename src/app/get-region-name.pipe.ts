import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getRegionName'
})
export class GetRegionNamePipe implements PipeTransform {

  regions = [
    { region: 'Alabama', abbr: 'AL' },
    { region: 'Alaska', abbr: 'AK' },
    { region: 'Arizona', abbr: 'AZ' },
    { region: 'Arkansas', abbr: 'AR' },
    { region: 'California', abbr: 'CA' },
    { region: 'Colorado', abbr: 'CO' },
    { region: 'Connecticut', abbr: 'CT' },
    { region: 'Delaware', abbr: 'DE' },
    { region: 'Florida', abbr: 'FL' },
    { region: 'Georgia', abbr: 'GA' },
    { region: 'Hawaii', abbr: 'HI' },
    { region: 'Idaho', abbr: 'ID' },
    { region: 'Illinois', abbr: 'IL' },
    { region: 'Indiana', abbr: 'IN' },
    { region: 'Iowa', abbr: 'IA' },
    { region: 'Kansas', abbr: 'KS' },
    { region: 'Kentucky', abbr: 'KY' },
    { region: 'Louisiana', abbr: 'LA' },
    { region: 'Maine', abbr: 'ME' },
    { region: 'Maryland', abbr: 'MD' },
    { region: 'Massachusetts', abbr: 'MA' },
    { region: 'Michigan', abbr: 'MI' },
    { region: 'Minnesota', abbr: 'MN' },
    { region: 'Mississippi', abbr: 'MS' },
    { region: 'Missouri', abbr: 'MO' },
    { region: 'Montana', abbr: 'MT' },
    { region: 'Nebraska', abbr: 'NE' },
    { region: 'Nevada', abbr: 'NV' },
    { region: 'New Hampshire', abbr: 'NH' },
    { region: 'New Jersey', abbr: 'NJ' },
    { region: 'New Mexico', abbr: 'NM' },
    { region: 'New York', abbr: 'NY' },
    { region: 'North Carolina', abbr: 'NC' },
    { region: 'North Dakota', abbr: 'ND' },
    { region: 'Ohio', abbr: 'OH' },
    { region: 'Oklahoma', abbr: 'OK' },
    { region: 'Oregon', abbr: 'OR' },
    { region: 'Pennsylvania', abbr: 'PA' },
    { region: 'Rhode Island', abbr: 'RI' },
    { region: 'South Carolina', abbr: 'SC' },
    { region: 'South Dakota', abbr: 'SD' },
    { region: 'Tennessee', abbr: 'TN' },
    { region: 'Texas', abbr: 'TX' },
    { region: 'Utah', abbr: 'UT' },
    { region: 'Vermont', abbr: 'VT' },
    { region: 'Virginia', abbr: 'VA' },
    { region: 'Washington', abbr: 'WA' },
    { region: 'West Virginia', abbr: 'WV' },
    { region: 'Wisconsin', abbr: 'WI' },
    { region: 'Wyoming', abbr: 'WY' },
    { region: 'Alberta', abbr: 'AB'},
    { region: 'British Columbia', abbr: 'BC'},
    { region: 'Manitoba', abbr: 'MB'},
    { region: 'New Brunswick', abbr: 'NB'},
    { region: 'Newfoundland', abbr: 'NF'},
    { region: 'Northwest Territory', abbr: 'NT'},
    { region: 'Nova Scotia', abbr: 'NS'},
    { region: 'Nunavut', abbr: 'NU'},
    { region: 'Ontario', abbr: 'ON'},
    { region: 'Prince Edward Island', abbr: 'PE'},
    { region: 'Quebec', abbr: 'QC'},
    { region: 'Saskatchewan', abbr: 'SK'},
    { region: 'Yukon', abbr: 'YT'}
  ];

  transform(region: string): string {
    for (const r in this.regions) {
      if (region === this.regions[r].abbr) {
        return this.regions[r].region;
      }
    }
    return region;
  }

}
