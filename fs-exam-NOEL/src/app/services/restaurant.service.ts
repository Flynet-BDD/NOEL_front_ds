import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Restaurant } from '../dto/restaurant.dto';
import { Observable } from 'rxjs';
import { ListeRestaurantsComponent } from '../components/liste-restaurants/liste-restaurants.component';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService 
{
  constructor(private httpClient: HttpClient) { }

  public getRestaurants(): Observable<Restaurant[]> 
  {
    return this.httpClient.get<Restaurant[]>(`http://localhost:8080/restaurants`);
  }

  public getRestaurantById(id:number): Observable<Restaurant> 
  {
    return this.httpClient.get<Restaurant>(`http://localhost:8080/restaurants`+id);
  }

  public createRestaurant(nom: string, adresse: string): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>(`http://localhost:8080/restaurants`, {nom: nom, adresse : adresse})
  }
}
