import {ErrorDialogComponent, FooterComponent, HeaderComponent, MapViewComponent, SideNavComponent} from "./components";
import {MatButtonModule, MatDialogModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {PlacesModule} from "../places/places.module";
import {CommonModule} from "@angular/common";
import {NgxMapboxGLModule} from "ngx-mapbox-gl";
import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpApiInterceptor} from "./interceptor/HttpApiInterceptor";
import {ErrorApiHandlerService} from "./services/error-api-handler.service";

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SideNavComponent, MapViewComponent, ErrorDialogComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    MapViewComponent
  ],
  entryComponents: [ErrorDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    NgxMapboxGLModule,
    PlacesModule
  ],
  providers: [
    ErrorApiHandlerService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpApiInterceptor, multi: true}
  ]
})
export class SharedModule {
}
