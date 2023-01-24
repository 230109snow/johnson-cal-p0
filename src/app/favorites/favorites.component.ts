import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private router:Router){}
  favorites: [] = [];

  goToDetailPage(id: string) {
    this.router.navigate(['/resort', id]);
  }

  removeFavorite(id: string) {
    let temp: any[]= [];
    for (let [i,fav] of this.favorites.entries()) {
      if (!(this.favorites[i][0]===id)) {
        temp.push(fav);
      } else {
        this.favorites.splice(i,1)
      }
    }
    localStorage.setItem('favorites', JSON.stringify(temp))
  }
  
  ngOnInit() {
    if (localStorage.getItem('favorites')){
      this.favorites = JSON.parse(localStorage.getItem('favorites') || "")
    }

  }
}
