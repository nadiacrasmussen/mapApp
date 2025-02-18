import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsModule } from './maps/maps.module';

const routes: Routes = [
  {
    path:'maps',
    loadChildren:()=>import('./maps/maps.module').then(m=>m.MapsModule),
  },
  {
    path:'alone',
    loadChildren:()=>import('./alone/page/alone-page/alone-page.component').then(m=>m.AlonePageComponent),
  },
  {
    path:'**',
    redirectTo:'maps',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
