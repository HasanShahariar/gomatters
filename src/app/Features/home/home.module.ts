import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomepageComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
