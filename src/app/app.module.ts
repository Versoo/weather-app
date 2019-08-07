import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {SharedModule} from "./shared/shared.module";
import {PlacesModule} from "./places/places.module";
import {StoreModule} from '@ngrx/store';
import {appReducers} from "./store/app.reducer";
import {EffectsModule} from '@ngrx/effects';
import {AppStateEffects} from './store/app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {savePlacesStore} from "./places/store/places.reducer";
import {NgxMapboxGLModule} from "ngx-mapbox-gl";

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
