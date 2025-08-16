import { Component, Renderer2, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Dashboard } from './shared/dashboard/dashboard';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Dashboard, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  onToggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
