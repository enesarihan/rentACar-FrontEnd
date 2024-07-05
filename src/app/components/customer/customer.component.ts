import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers:Customer[] = [];
  dataLoaded=false;


  constructor(private customerService:CustomerService) {}

  ngOnInit(): void {
     this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response
      this.dataLoaded=true;
    })
   }

}
