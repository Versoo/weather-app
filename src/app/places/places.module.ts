import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {
  ClearHistoryButtonComponent,
  FavoritePlaceIconButtonComponent,
  FavoritePlacesListComponent,
  PlaceCardComponent,
  PlacesHistoryListComponent,
  PlaceWeatherDetailsComponent,
  SearchPlaceFormComponent
} from "./components";

@NgModule({
  declarations: [SearchPlaceFormComponent, PlacesHistoryListComponent, FavoritePlacesListComponent, ClearHistoryButtonComponent, PlaceCardComponent, FavoritePlaceIconButtonComponent, PlaceWeatherDetailsComponent],
  exports: [
    SearchPlaceFormComponent,
    PlacesHistoryListComponent,
    FavoritePlacesListComponent,
    ClearHistoryButtonComponent,
    PlaceCardComponent,
    PlaceWeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PlacesModule {
}
