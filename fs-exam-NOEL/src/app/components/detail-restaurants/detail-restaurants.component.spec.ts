import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRestaurantsComponent } from './detail-restaurants.component';

describe('DetailRestaurantsComponent', () => {
  let component: DetailRestaurantsComponent;
  let fixture: ComponentFixture<DetailRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRestaurantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
