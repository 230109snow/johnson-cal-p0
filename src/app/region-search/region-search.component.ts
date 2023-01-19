import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-region-search',
  templateUrl: './region-search.component.html',
  styleUrls: ['./region-search.component.css']
})
export class RegionSearchComponent implements OnInit{
  constructor(
    private http : HttpClient
  ){};

  country : string = "";
  region : string = "";
  resortList : any = {};
  countryList : string[] = [];
  regionList : string[] = [];
  resultList : any[] = [];

  form = new FormGroup({})

  searchByCountry(target : any) {
    let country = target.value;
    if (country) {
      this.resultList = [];
      this.resortList.forEach((resort : any) => {
        if(resort.country === country) {
          let resultInfo = {
            id : resort.slug,
            name : resort.name,
            region : resort.region,
            country : resort.country
          }
          this.resultList.push(resultInfo)
        }
      })
      console.log(this.resultList);
    }
  }

  searchByRegion(target : any) {
    let region = target.value;
    if (region) {
      this.resultList = [];
      this.resortList.forEach((resort : any) => {
        if(resort.region === region) {
          let resultInfo = {
            id : resort.slug,
            name : resort.name,
            region : resort.region,
            country : resort.country
          }
          this.resultList.push(resultInfo)
        }
      })
      console.log(this.resultList);
    }
  }

  ngOnInit(): void {
    let url = 'assets/json/resort-list.json';
    
    this.http.get(url, {}).subscribe((data : any) => {
      this.resortList = data.data;
      console.log(this.resortList);
      
      // Build country & region list
      this.resortList.forEach((resort : any) => {
        if (!this.countryList.includes(resort.country)) {
          this.countryList.push(resort.country);
        }
        if (!this.regionList.includes(resort.region)) {
          this.regionList.push(resort.region);
        }
      })
    })
  }
}
