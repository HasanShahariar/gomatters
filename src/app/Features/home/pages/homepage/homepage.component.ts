import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {



  isNavDrop:boolean=false;
  constructor() { }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  ngOnInit() {
  AOS.init()
  }

  // navDrop(isNavDrop:boolean){
  //   this.isNavDrop = isNavDrop;
  // }
  // navDropDown(){
  //   this.isNavDrop = !this.isNavDrop;
  // }

}
