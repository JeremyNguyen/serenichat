import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {NosLocauxComponent} from './nos-locaux/nos-locaux.component';
import {NosPensionnairesComponent} from './nos-pensionnaires/nos-pensionnaires.component';
import {ReservationComponent} from './reservation/reservation.component';
import {NousAiderComponent} from './nous-aider/nous-aider.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'nos-locaux',
    component: NosLocauxComponent
  },
  {
    path: 'nos-pensionnaires',
    component: NosPensionnairesComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'nous-aider',
    component: NousAiderComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
