import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/item/item.component';
import { HeaderItemsComponent } from './header/items/items.component';
import { UserDropdownComponent } from './header/user-dropdown/user-dropdown.component';
import { MapComponent } from './map/map.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FacebookLoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SidebarItemComponent,
    HeaderItemsComponent,
    UserDropdownComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANYHUci8GpRm1mPe1oORnXo_V6D1c1hAE'
    }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
