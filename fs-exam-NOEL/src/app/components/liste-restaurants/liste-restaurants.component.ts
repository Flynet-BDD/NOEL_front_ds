import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/dto/restaurant.dto';

@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.component.html',
  styleUrls: ['./liste-restaurants.component.css']
})
export class ListeRestaurantsComponent implements OnInit {

  public nomInput: string = "";
  public adresseInput: string = "";

  @Input()
  public restaurants: Restaurant[] = [];

  @Output()
  public restaurantToCreate: EventEmitter<RestaurantWithoutDetail> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public ajouterRestaurant(form: NgForm): void 
  {
    if (form.valid)
    {
      this.restaurantToCreate.emit({
        nom: this.nomInput,
        adresse: this.adresseInput   
      });
    }
  }
}

export interface RestaurantWithoutDetail
{
  nom: string;
  adresse: string;
}
