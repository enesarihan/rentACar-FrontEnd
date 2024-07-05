import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../models/color';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44391/api/Colors/getAll'


  constructor(private httpClient:HttpClient) { }

  getColors():Observable<Color[]>{
    return this.httpClient.get<Color[]>(this.apiUrl);
   }
}
