import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SeanceDto} from '../dtos/seanceDto';
import {FormulaireDto} from '../dtos/formulaireDto';
import {Observable} from 'rxjs';
import {CreneauDto} from '../dtos/creneauDto';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly HEADERS: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  private readonly URL_RESERVATIONS = 'http://127.0.0.1:3000/seances';

  constructor(private httpClient: HttpClient) {
  }

  getReservations(start: Date, end: Date): Observable<CreneauDto[]> {
    // TODO
    return new Observable((observer) => {

      const creneau1 = new CreneauDto();
      const creneau2 = new CreneauDto();
      const creneau3 = new CreneauDto();
      const creneau4 = new CreneauDto();

      creneau1.placesOccupees = 2;
      creneau1.debut = new Date(2020, 6, 7, 9, 0, 0);
      creneau1.fin = new Date(2020, 6, 7, 10, 0, 0);

      creneau2.placesOccupees = 2;
      creneau2.debut = new Date(2020, 6, 8, 14, 0, 0);
      creneau2.fin = new Date(2020, 6, 8, 18, 0, 0);

      creneau3.placesOccupees = 1;
      creneau3.seanceIndividuelle = false;
      creneau3.debut = new Date(2020, 6, 9, 9, 0, 0);
      creneau3.fin = new Date(2020, 6, 9, 13, 0, 0);

      creneau4.placesOccupees = 1;
      creneau4.seanceIndividuelle = false;
      creneau4.debut = new Date(2020, 6, 11, 10, 30, 0);
      creneau4.fin = new Date(2020, 6, 11, 11, 30, 0);

      observer.next([creneau1, creneau2, creneau3, creneau4]);
      observer.complete();
    });
/*    const params = new HttpParams();
    params.set('start', start.toString());
    params.set('end', end.toString());
    return this.httpClient.get<CreneauDto[]>(this.URL_RESERVATIONS, {headers: this.HEADERS, params});*/
  }

  reserver(formulaire: FormulaireDto) {
    // TODO
    console.log(formulaire);
    return new Observable((observer) => {
      observer.next([]);
      observer.complete();
    });
    // return this.httpClient.post(this.URL_RESERVATIONS, formulaire, {headers: this.HEADERS});
  }

}
