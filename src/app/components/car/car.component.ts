import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  car1 = {
    carId: 1,
    BrandId: 2,
    ColorId: 3,
    DailyPrice: 250,
    Description: 'Ford Focus',
  };
  car2 = {
    carId: 2,
    BrandId: 2,
    ColorId: 3,
    DailyPrice: 250,
    Description: 'Ford Fiesta',
  };
  car3 = {
    carId: 3,
    BrandId: 2,
    ColorId: 3,
    DailyPrice: 250,
    Description: 'Ford Mustang',
  };
  car4 = {
    carId: 4,
    BrandId: 2,
    ColorId: 3,
    DailyPrice: 250,
    Description: 'Ford Toruneo',
  };
  car5 = {
    carId: 5,
    BrandId: 2,
    ColorId: 3,
    DailyPrice: 250,
    Description: 'Ford GT',
  };

  cars = [this.car1, this.car2, this.car3, this.car4, this.car5];
}
