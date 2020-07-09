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
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

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
    FooterComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    NgImageFullscreenViewModule
  ],
  providers: [],
  entryComponents: [FormulaireComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
