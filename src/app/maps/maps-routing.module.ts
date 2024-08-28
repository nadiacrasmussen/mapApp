import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutsComponent } from './layouts/maps-layouts/maps-layouts.component';
import { FullScreenPagesComponent } from './pages/full-screen-pages/full-screen-pages.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';
import { MarkersPagesComponent } from './pages/markers-pages/markers-pages.component';
import { ZoomRangePagesComponent } from './pages/zoom-range-pages/zoom-range-pages.component';

const routes: Routes = [
  {
    path:'',
    component:MapsLayoutsComponent,
    children:[
      {path:'fullscreen', component:FullScreenPagesComponent},
      {path:'zoom-range', component:ZoomRangePagesComponent},
      {path:'markers', component:MarkersPagesComponent},
      {path:'properties', component:PropertiesPagesComponent},
      {path:'**', redirectTo:'fullScreen'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
