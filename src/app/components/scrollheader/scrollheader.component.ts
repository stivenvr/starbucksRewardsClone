import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollheader',
  templateUrl: './scrollheader.component.html',
  styleUrls: ['./scrollheader.component.css']
})
export class ScrollheaderComponent {

  headerfixed:boolean = false;
  
  @HostListener('window:scroll', ['$event']) onscroll(){
    if (window.scrollY > 99) {
      this.headerfixed = true;
    }
    else{
      this.headerfixed = false;
    }
  }
}
