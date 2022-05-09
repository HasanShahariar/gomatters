import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatePage(pageNumber:any){
    console.log("navigate to ...");

   if(pageNumber==1){
    this.router.navigateByUrl('/');
   }
   else if(pageNumber==4){
    this.router.navigateByUrl('/about-us');
   }
  }

}
