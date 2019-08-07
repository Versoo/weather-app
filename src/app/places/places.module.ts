import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPlaceFormComponent} from './components/search-place-form/search-place-form.component';
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
import {PlacesHistoryListComponent} from './components/places-history-list/places-history-list.component';
import {FavoritePlacesListComponent} from './components/favorite-places-list/favorite-places-list.component';
import {ClearHistoryButtonComponent} from './components/clear-history-button/clear-history-button.component';
import {PlaceCardComponent} from './components/place-card/place-card.component';
import {FavoritePlaceIconButtonComponent} from './components/favorite-place-icon-button/favorite-place-icon-button.component';

@NgModule({
  declarations: [SearchPlaceFormComponent, PlacesHistoryListComponent, FavoritePlacesListComponent, ClearHistoryButtonComponent, PlaceCardComponent, FavoritePlaceIconButtonComponent],
  exports: [
    SearchPlaceFormComponent,
    PlacesHistoryListComponent,
    FavoritePlacesListComponent,
    ClearHistoryButtonComponent,
    PlaceCardComponent
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
