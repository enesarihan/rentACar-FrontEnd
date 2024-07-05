import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { Car } from '../models/car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44391/api/Cars/getcardetail'


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
   }
}
