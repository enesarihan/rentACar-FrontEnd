import { Component } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  brands:Brand[] = [];
  dataLoaded=false;


  constructor(private brandService:BrandService) {}

  ngOnInit(): void {
     this.getBrands();
  }

  getBrands(){
    this.brandService.getCars().subscribe(response=>{
      this.brands = response
      this.dataLoaded=true;
    })
   }

}
