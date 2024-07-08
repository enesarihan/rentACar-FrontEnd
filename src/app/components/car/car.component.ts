import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../models/car-detail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carDetail:CarDetail[]=[];
  dataLoaded=false;


  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
       if (params['brandId']){
        this.getCarsByBrand(params['brandId'])
       }
       else{
        this.getAllCars();
       }
     })
  }

  getAllCars(){
    this.carService.getAllCars().subscribe(response=>{
      this.carDetail = response.data
      this.dataLoaded=true;
    })
   }

   getCarsByBrand(brandId:number){
    this.carService.getCarsbyBrand(brandId).subscribe(response=>{
      this.cars = response
      this.dataLoaded=true;
    })
   }
}
