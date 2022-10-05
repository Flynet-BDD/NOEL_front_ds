import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCouleurRestaurant]'
})
export class CouleurRestaurantDirective 
{

  @Input('appCouleurRestaurant')
  set index(index:string)
  {
    if(parseInt(index) >= 2)
    {
      // Colorie en jaune si note supérieure à 2
      this.renderer.setStyle(this._el.nativeElement, 'background', 'yellow')
    }
    
    if(parseInt(index) <= 1 && parseInt(index)>= 0)
    {
      // Colorie en rouge si note inférieure à 1
      this.renderer.setStyle(this._el.nativeElement, 'background', 'red')
    }

    if(parseInt(index) === -1)
    {
      // On fait rien car il n'y a pas d'évaluation
    }
  }

  constructor(private _el: ElementRef, private renderer: Renderer2) { }

}
