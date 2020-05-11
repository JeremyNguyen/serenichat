import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NosLocauxComponent } from './nos-locaux/nos-locaux.component';
import { NosPensionnairesComponent } from './nos-pensionnaires/nos-pensionnaires.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NousAiderComponent } from './nous-aider/nous-aider.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    NosLocauxComponent,
    NosPensionnairesComponent,
    ReservationComponent,
    NousAiderComponent,
    ContactComponent,
    FooterComponent
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
