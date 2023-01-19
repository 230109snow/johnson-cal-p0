import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.css']
})
export class ResortDetailComponent implements OnInit, OnDestroy{
  constructor(
    private route : ActivatedRoute,
    private http : HttpClient
  ) {}

  private sub : any;
  resort_id : string = "";

  name : string = "";
  country : string = "";
  region : string = "";
  liftsOpen = 0;
  liftsTotal : any = 0;
  conditions = {
    base : 0,
    season : 0,
    dayTotal : 0,
    weekTotal : 0
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.resort_id = params['id']; 
      let url = 'assets/json/resort-info.json'
      
      this.http.get(url, {}).subscribe((data : any) => {
        console.log(data);

        this.name = data.data.name;
        this.country = data.data.country;
        this.region = data.data.region;

        this.liftsOpen = data.data.lifts.stats.open;
        this.liftsTotal = Object.keys(data.data.lifts.status).length;

        this.conditions.base = data.data.conditions.base;
        this.conditions.season = data.data.conditions.season;
        this.conditions.dayTotal = data.data.conditions.twentyfour_hours;
        this.conditions.weekTotal = data.data.conditions.seven_days;

      }) 
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
