import { Component, OnInit } from '@angular/core';
import { RestaurantWithoutDetail } from 'src/app/components/liste-restaurants/liste-restaurants.component';
import { Restaurant } from 'src/app/dto/restaurant.dto';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void
  {
    this.restaurantService.getRestaurants().subscribe({
      next: value => this.restaurants = value
    })
  }

  public createRestaurant(restaurant: RestaurantWithoutDetail): void 
  {
    this.restaurantService.createRestaurant(restaurant.nom, restaurant.adresse).subscribe(
    {
      next: value => this.restaurants.push(value)
    })
  }

}
