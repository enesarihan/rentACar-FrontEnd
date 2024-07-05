import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44391/api/Customer/getAll'


  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiUrl);
   }
}
