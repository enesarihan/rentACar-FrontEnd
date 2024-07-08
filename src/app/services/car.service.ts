import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { CarDetailService } from './car-detail.service';
import { CarDetail } from '../models/car-detail';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44391/api';


  constructor(private httpClient:HttpClient) { }

  getAllCars():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "/Cars/getcardetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

   getCarsbyBrand(brandId:number):Observable<Car[]>{
    let newPath = this.apiUrl + "/Cars/getbybrandid?brandId="+brandId
    return this.httpClient.get<Car[]>(newPath);
   }
}
