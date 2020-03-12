import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NosLocauxComponent } from './nos-locaux/nos-locaux.component';
import { PourQuiComponent } from './pour-qui/pour-qui.component';
import { NosPensionnairesComponent } from './nos-pensionnaires/nos-pensionnaires.component';
import { ReservationComponent } from './accueil/reservation/reservation.component';
import { NousAiderComponent } from './nous-aider/nous-aider.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    NosLocauxComponent,
    PourQuiComponent,
    NosPensionnairesComponent,
    ReservationComponent,
    NousAiderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
