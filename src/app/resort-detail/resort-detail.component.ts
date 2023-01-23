import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { apiKey } from 'src/api-key';

interface tweet {
  text: string;
  id_str: string;
  created_at: string;
}
interface lift {
  name: string;
  status: string;
  style: string;
}

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
  liftsTotal : number = 0;
  lifts : lift[] = [];
  conditions = {
    base : 0,
    season : 0,
    dayTotal : 0,
    weekTotal : 0
  };
  twitterUser : string = "";
  tweets : tweet[] = [];

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.resort_id = params['id']; 
      let url = 'assets/json/alta.json';
      // let url= `https://ski-resorts-and-conditions.p.rapidapi.com/v1/resort/${this.resort_id}`
      
      this.http.get(url, {
        // headers: {
        //   'X-RapidAPI-Key': apiKey,
        //   'X-RapidAPI-Host': 'ski-resorts-and-conditions.p.rapidapi.com'
        // }
      }).subscribe((data : any) => {
        console.log(data);

        this.name = data.data.name;
        this.country = data.data.country;
        this.region = data.data.region;
        // Lifts
        this.liftsOpen = data.data.lifts.stats.open;
        this.liftsTotal = Object.keys(data.data.lifts.status).length;
        for (const lift in data.data.lifts.status) {
          let liftStyle = ""
          let liftName : string = lift;
          let liftStatus : string = data.data.lifts.status[lift];
          if (liftStatus==="closed"){
             liftStyle= "list-group-item-danger";
          } else if (liftStatus==="open"){
            liftStyle = "list-group-item-success"
          } else {
            liftStyle = "list-group-item-dark"
          }
          this.lifts.push({ name : liftName, status: liftStatus, style: liftStyle})
        }        
        // Conditions
        if (data.data.conditions) {
          this.conditions.base = data.data.conditions.base;
          this.conditions.season = data.data.conditions.season;
          this.conditions.dayTotal = data.data.conditions.twentyfour_hours;
          this.conditions.weekTotal = data.data.conditions.seven_days;
        }
        // Twitter
        this.twitterUser = data.data.twitter.user;
        for (let tweet of data.data.twitter.tweets) {
          this.tweets.push({
            text: tweet.text,
            id_str: tweet.id_str,
            created_at: tweet.created_at.substr(0,19)
          })      
        }
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
