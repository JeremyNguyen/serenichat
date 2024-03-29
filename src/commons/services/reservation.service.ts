import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FormulaireDto} from '../dtos/formulaireDto';
import {Observable} from 'rxjs';
import {CreneauDto} from '../dtos/creneauDto';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly HEADERS: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
    Pragma: 'no-cache',
    Expires: '0'
  });

  private readonly URL_RESERVATIONS = 'http://serenichat.fr:3000/seances';

  constructor(private httpClient: HttpClient) {
  }

  getReservations(start: Date, end: Date): Observable<CreneauDto[]> {
    const params = new HttpParams().set('start', start.toString()).set('end', end.toString());
    return this.httpClient.get<CreneauDto[]>(this.URL_RESERVATIONS, {headers: this.HEADERS, params});
  }

  reserver(formulaire: FormulaireDto) {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    formulaire.debut = new Date(formulaire.debut.getTime() - tzoffset);
    formulaire.fin = new Date(formulaire.fin.getTime() - tzoffset);
    return this.httpClient.post(this.URL_RESERVATIONS, formulaire, {headers: this.HEADERS});
  }

}
