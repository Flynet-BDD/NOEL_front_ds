import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRestaurantsComponent } from './liste-restaurants.component';

describe('ListeRestaurantsComponent', () => {
  let component: ListeRestaurantsComponent;
  let fixture: ComponentFixture<ListeRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRestaurantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
