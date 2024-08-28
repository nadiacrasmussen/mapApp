import { ZoomRangePagesComponent } from './pages/zoom-range-pages/zoom-range-pages.component';
import { MarkersPagesComponent } from './pages/markers-pages/markers-pages.component';
import { FullScreenPagesComponent } from './pages/full-screen-pages/full-screen-pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';

import { MapsLayoutsComponent } from './layouts/maps-layouts/maps-layouts.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';

import { CounterAloneComponent } from '../alone/component/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/component/side-menu/side-menu.component';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2FuZGVsYW5kaSIsImEiOiJjbHYzdWRqeGUwMXpqMmxwMXVpbTZoaTY0In0.yultRG7jGwv8Qg7obV_QDw';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutsComponent,
    FullScreenPagesComponent,
    MarkersPagesComponent,
    PropertiesPagesComponent,
    ZoomRangePagesComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,

    SideMenuComponent
  ]
})export class MapsModule { }
