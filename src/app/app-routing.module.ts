import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
