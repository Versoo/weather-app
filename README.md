# Angular - Weather APP
Aplikacja ma służyć do tworzenia listy lokacji, w których chcemy na bieżąco sprawdzać pogodę.

## Podstawowe funkcjonalności:
* Dodawanie nowej lokacji do listy
* Usuwanie lokacji z listy
* Lista z lokacjami zawiera nazwę lokacji, temperaturę i podstawowy opis np. 'deszcz'
* Dane pogodowe pozyskiwane z zewnętrznego API
* Aplikacja powinna zapamiętywać listę lokacji pomiędzy sesjami

## Wybrane narzędzia:
* Angular @7.2 [(Docs)](https://angular.io)
* NgRx @7.4 [(Docs)](https://ngrx.io)
* API MapBox [(Docs)](https://docs.mapbox.com/api/search/#endpoints)
* API OpenWeatherMap [(Docs)](https://openweathermap.org/current)
* ngx-mapbox-gl [(GitHub)](https://github.com/Wykks/ngx-mapbox-gl)

## Dodatkowe funkcje
* Możliwość zaznaczenia ulubionych lokalizacji, wyświetlane na górze listy
* Wyświetlanie lokalizacji na mapie
* Wyświetlanie szczegółowych informacji na temat lokalizacji po wybraniu z listy.
* Automatyczne odświeżanie danych co 60sek
