import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { PropertyComponent } from './components/property/property.component';
import { ReadReviewComponent } from './components/read-review/read-review.component';
import { WriteReviewComponent } from './components/write-review/write-review.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    SearchResultComponent,
    PropertyComponent,
    ReadReviewComponent,
    WriteReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:  "", pathMatch:  "full",redirectTo:  "home"},
      {path: "home", component: HomeComponent},
      {path: "contact", component: ContactComponent},
      {path: "search", component: SearchResultComponent},
      {path: "property/:property_id", component: PropertyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
