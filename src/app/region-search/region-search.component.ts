import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Resort {
  id: string,
  name: string,
  region: string,
  country: string
}

@Component({
  selector: 'app-region-search',
  templateUrl: './region-search.component.html',
  styleUrls: ['./region-search.component.css']
})

export class RegionSearchComponent implements OnInit{
  constructor(
    private http : HttpClient,
    private router : Router
  ){};

  resorts : Resort[] =[];
  countries : string[] = [];
  states : string[] = [];
  provinces : string[] = [];
  regions : string[] = [];
  countrySelected : string = "";
  regionSelected : string = "";
  results : Resort[] =[];
  cDisabled = false;
  rDisabled = true;
  showResults = false;
  
  navigateToDetail(resort: string) {
    if (resort) {
      this.router.navigate(['/resort', resort]);
    }
  }
  
  search(form: any){
    if (this.regionSelected) {
      this.getResults('r', this.regionSelected)
    } else if (this.countrySelected){
      if (this.countrySelected === 'CA') {
        this.regions = this.provinces;
        this.rDisabled = false;
      } else if (this.countrySelected ==='US') {
        this.regions = this.states;
        this.rDisabled = false;
      } else {
        this.regions = [];  
      }
      this.cDisabled = true;
      this.getResults('c', this.countrySelected)
    }
  }

  getResults(type: string, location: string) {
    if (type === "r") {
      let temp: Resort[] = [];
      for (let resort of this.results) {
        if (resort.region === location) {
          temp.push(resort)
        }
      }
      this.results = temp;
    } else {
      for (let resort of this.resorts) {
        if (resort.country === location) {
          this.results.push(resort)
        }
      }
    }
  }
  clear() {
    this.results = [];
    this.cDisabled = false;
    this.rDisabled = true;
    this.countrySelected = "";
    this.regionSelected = "";
  }

  requestPage(page: number) {
    let url = `https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort?page=${page}`
    this.http.get(url, {
      headers: {
        'X-RapidAPI-Key': '2220ea9f98msh4b4af6b294ddb0ep1f7990jsnb5f00afb99ac',
        'X-RapidAPI-Host': 'ski-resorts-and-conditions.p.rapidapi.com'
      }
    }).subscribe((data: any) => {
      const response = data.data;
      for (let resort of response) {
        let temp = {
          id: resort.slug,
          name: resort.name,
          region: "",
          country: resort.country
        }
        if (!this.countries.includes(resort.country)) {
          this.countries.push(resort.country);
        }
        if (resort.country === "CA"){
          temp.region = resort.region;
          if (!this.provinces.includes(resort.region)){
            this.provinces.push(resort.region);
          }
        } else if (resort.country === "US"){
          temp.region = resort.region;
          if (!this.states.includes(resort.region)){
            this.states.push(resort.region);
          }
        }
        this.resorts.push(temp);
      }
      this.countries.sort();
      this.states.sort();
      this.provinces.sort();
      if (data.next_page) {
        this.requestPage(data.next_page);
      }
    })
    
  }

  ngOnInit(): void {
    this.requestPage(1);
  }
}
