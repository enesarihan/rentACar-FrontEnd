import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { CarDetail } from '../models/car-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

apiUrl = 'https://localhost:44391/api/';

  constructor(private httpClient: HttpClient) {}

  getAllCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'Cars/getcardetail';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}
