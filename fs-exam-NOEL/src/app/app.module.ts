import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeRestaurantsComponent } from './components/liste-restaurants/liste-restaurants.component';
import { DetailRestaurantsComponent } from './components/detail-restaurants/detail-restaurants.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CouleurRestaurantDirective } from './directives/couleur-restaurant.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListeRestaurantsComponent,
    DetailRestaurantsComponent,
    RestaurantComponent,
    CouleurRestaurantDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
