import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
   loadChildren: () => import('./Features/home/home.module').then(x => x.HomeModule)
  },
  {
    path: '',
     loadChildren: () => import('./Features/about-us/about-us.module').then(x => x.AboutUsModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
