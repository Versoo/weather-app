import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {EffectsModule} from "@ngrx/effects";
import {PlacesModule} from "./places/places.module";
import {StoreModule} from "@ngrx/store";
import {NgxMapboxGLModule} from "ngx-mapbox-gl";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";
import {savePlacesStore} from "./places/store";
import {environment} from "../environments/environment";
import {appReducers, AppStateEffects} from "./store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers, {metaReducers: [savePlacesStore]}),
    EffectsModule.forRoot(AppStateEffects),
    AppRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    PlacesModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxAccessToken
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
