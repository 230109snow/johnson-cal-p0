import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxTwitterWidgetsModule } from "ngx-twitter-widgets";

import { AppComponent } from './app.component';
import { ResortSearchComponent } from './resort-search/resort-search.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { RegionSearchComponent } from './region-search/region-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetRegionNamePipe } from './get-region-name.pipe';
import { GetCountryNamePipe } from './get-country-name.pipe';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    ResortSearchComponent,
    ResortDetailComponent,
    RegionSearchComponent,
    NavbarComponent,
    GetRegionNamePipe,
    GetCountryNamePipe,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTwitterWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
