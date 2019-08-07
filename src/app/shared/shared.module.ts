import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SideNavComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class SharedModule {
}
