import { Component } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { Color } from '../../models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {

  colors:Color[] = [];
  dataLoaded=false;


  constructor(private colorService:ColorService) {}

  ngOnInit(): void {
     this.getColor();
  }

  getColor(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response
      this.dataLoaded=true;
    })
   }

}
