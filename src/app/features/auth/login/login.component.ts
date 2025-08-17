import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { LoginDto } from '../../../core/dtos/login.dtos';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const request: LoginDto = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(request).subscribe({
      next: () => {
        this.router.navigate(['/watchlist']);
      },
      error: (err) => console.error('Login failed', err),
    });
  }
}
