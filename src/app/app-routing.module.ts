import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {NosLocauxComponent} from './nos-locaux/nos-locaux.component';
import {PourQuiComponent} from './pour-qui/pour-qui.component';
import {NosPensionnairesComponent} from './nos-pensionnaires/nos-pensionnaires.component';
import {ReservationComponent} from './accueil/reservation/reservation.component';
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
    path: 'pour-qui',
    component: PourQuiComponent
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
