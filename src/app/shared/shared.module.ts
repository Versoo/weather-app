import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import {NgxMapboxGLModule} from "ngx-mapbox-gl";
import {PlacesModule} from "../places/places.module";

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SideNavComponent, MapViewComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    NgxMapboxGLModule,
    PlacesModule
  ]
})
export class SharedModule {
}
