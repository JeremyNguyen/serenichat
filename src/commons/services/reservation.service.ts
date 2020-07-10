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
    const params = new HttpParams().set('start', start.toString()).set('end', end.toString());
    return this.httpClient.get<CreneauDto[]>(this.URL_RESERVATIONS, {headers: this.HEADERS, params});
  }

  reserver(formulaire: FormulaireDto) {
    return this.httpClient.post(this.URL_RESERVATIONS, formulaire, {headers: this.HEADERS});
  }

}
