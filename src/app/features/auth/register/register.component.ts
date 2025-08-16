import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginDto } from '../../../core/dtos/login.dtos';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.css',
})
export class RegisterComponent {
  email = '';
  password = '';
  constructor(private authService: AuthService) {}
  onLogin() {
    const request: LoginDto = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(request).subscribe({
      next: () => {
        console.log('✅ Logged in successfully');
      },
      error: (err) => console.error('❌ Login failed', err),
    });
  }
}
