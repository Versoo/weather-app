import {FooterComponent, HeaderComponent, MapViewComponent, SideNavComponent} from "./components";
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {PlacesModule} from "../places/places.module";
import {CommonModule} from "@angular/common";
import {NgxMapboxGLModule} from "ngx-mapbox-gl";
import {NgModule} from "@angular/core";

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
