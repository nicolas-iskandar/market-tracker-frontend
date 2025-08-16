import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDto } from '../dtos/login.dtos';
import { RegisterDto } from '../dtos/register.dtos';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`;
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  register(data: RegisterDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: LoginDto): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, data).pipe(
      tap((response) => {
        if (response && response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
