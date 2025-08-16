import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyDto } from '../dtos/currency.dtos';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = `${environment.apiUrl}/api/currencies`;

  constructor(private http: HttpClient) {}

  getCurrency(from: string, to: string): Observable<CurrencyDto> {
    return this.http.get<CurrencyDto>(`${this.apiUrl}/${from}/${to}`);
  }

  getCurrencies(to: string): Observable<CurrencyDto[]> {
    return this.http.get<CurrencyDto[]>(`${this.apiUrl}/${to}`);
  }

  getAllCurrencies(): Observable<CurrencyDto[]> {
    return this.http.get<CurrencyDto[]>(`${environment.apiUrl}/api/dashboard`);
  }
}
