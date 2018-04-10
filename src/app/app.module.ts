import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IpinfoComponent } from './ipinfo/ipinfo.component';

import { IpinfoService } from './services/ipinfo.service';
import { MapService } from './services/map.service';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HeaderComponent,
    FooterComponent,
    IpinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, IpinfoService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
