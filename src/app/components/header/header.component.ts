import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Mycolor: string = "#000000";

  changeColor():void{
    this.Mycolor = "#008248";
    
  }
  changeColorB():void{
    this.Mycolor = "#000000";
  }
}
