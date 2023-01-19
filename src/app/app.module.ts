import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ResortSearchComponent } from './resort-search/resort-search.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { RegionSearchComponent } from './region-search/region-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ResortSearchComponent,
    ResortDetailComponent,
    RegionSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
