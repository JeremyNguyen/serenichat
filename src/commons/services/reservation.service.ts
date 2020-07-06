import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SeanceDto} from '../dtos/seanceDto';
import {FormulaireDto} from '../dtos/formulaireDto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly HEADERS: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  private readonly URL_RESERVATIONS = 'http://127.0.0.1:3000/reservations';

  constructor(private httpClient: HttpClient) {
  }

  getReservations(start: Date, end: Date): Observable<any[]> {
    // TODO
    return new Observable((observer) => {
      observer.next([]);
      observer.complete();
    });
/*    const params = new HttpParams();
    params.set('start', start.toString());
    params.set('end', end.toString());
    return this.httpClient.get<any[]>(this.URL_RESERVATIONS, {headers: this.HEADERS, params});*/
  }

  reserver(seance: SeanceDto, formulaire: FormulaireDto) {
    // TODO
    console.log(seance);
    console.log(formulaire);
    return new Observable((observer) => {
      observer.next([]);
      observer.complete();
    });
    // return this.httpClient.post(this.URL_RESERVATIONS, null, {headers: this.HEADERS});
  }

}
