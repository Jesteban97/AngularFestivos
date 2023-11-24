import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Holiday } from '../entidades/holiday';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlAPI}holidays`;
  }

  public getHolidays(year: string): Observable<Holiday[]> {
    const urlT = `${this.url}/obtener/${year}`;
    return this.http.get<Holiday[]>(urlT);
  }

  public getVerifyHoliday(
    year: string,
    month: string,
    day: string
  ): Observable<string> {
    const urlT = `${this.url}/verificar/${year}/${month}/${day}`;
    return this.http.get(urlT, { responseType: 'text' });
  }
}
