import { Rental } from './../models/rental';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44391/api/Rentals/getrentalldetailsdto'


  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
   }
}
