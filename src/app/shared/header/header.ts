import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input({ required: true }) isDarkMode!: boolean;
  @Output() toggleDarkModeOutput = new EventEmitter();

  toggleDarkMode() {
    this.toggleDarkModeOutput.emit();
  }

  get authLink(): string {
    return localStorage.getItem('auth_token') ? '/logout' : '/login';
  }
}
