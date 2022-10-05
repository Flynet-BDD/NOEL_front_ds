import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/dto/restaurant.dto';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-detail-restaurants',
  templateUrl: './detail-restaurants.component.html',
  styleUrls: ['./detail-restaurants.component.css']
})
export class DetailRestaurantsComponent implements OnInit {

  public restaurant: Restaurant | undefined;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

}
