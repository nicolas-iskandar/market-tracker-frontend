import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrencyDto } from '../dtos/currency.dtos';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  private apiUrl = `${environment.apiUrl}/api/watchlist`;

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  getWatchlist(): Observable<CurrencyDto[]> {
    return this.http.get<CurrencyDto[]>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  addCurrency(currency: CurrencyDto): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/${currency.from}/${currency.to}`,
      null,
      {
        headers: this.getAuthHeaders(),
      }
    );
  }

  removeCurrency(from: string, to: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${from}/${to}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
