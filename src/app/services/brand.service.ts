import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44391/api/Brands/getAll'


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.apiUrl);
   }
}
