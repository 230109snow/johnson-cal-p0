import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-resort-search',
  templateUrl: './resort-search.component.html',
  styleUrls: ['./resort-search.component.css']
})
export class ResortSearchComponent {
  constructor(private http:HttpClient, private router:Router) {}

  id : string = "";

  goToDetailPage(id: string) {
    this.router.navigate(['/resort', id]);
  }

  getResortInfo() : void {
    console.log(this.id);
    this.router.navigate(['/resort', this.id]);
  }
}
