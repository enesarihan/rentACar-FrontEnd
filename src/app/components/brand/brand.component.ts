import { Component } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { response } from 'express';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {
  brands:Brand[] = [];
  dataLoaded=false;
  currentBrand:Brand;

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

   setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
   }

   getCurrentBrandClass(brand:Brand){
    if (brand == this.currentBrand){
      return "list-group-item list-group-item-action list-group-item-primary active"
    }
    else{
      return "list-group-item list-group-item-action list-group-item-primary"
    }

   }

}
