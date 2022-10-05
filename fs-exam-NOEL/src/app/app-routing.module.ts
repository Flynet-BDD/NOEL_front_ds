import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRestaurantsComponent } from './components/detail-restaurants/detail-restaurants.component';
import { ListeRestaurantsComponent } from './components/liste-restaurants/liste-restaurants.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: "full"
  },
  {
    path: 'restaurants', component: RestaurantComponent
  },
  {
    path: 'restaurants/:id', component: DetailRestaurantsComponent
  },
  //Route ci dessous pour moi, pour vérification 
  {
    path: 'listerestaurants', component: ListeRestaurantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
