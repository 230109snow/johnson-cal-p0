import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { RegionSearchComponent } from './region-search/region-search.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { ResortSearchComponent } from './resort-search/resort-search.component';

const routes: Routes = [
  {
    path:'',
    component: ResortSearchComponent
  },
  {
    path:'resort/:id',
    component: ResortDetailComponent
  },
  {
    path:'regions',
    component: RegionSearchComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
