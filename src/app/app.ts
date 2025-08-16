import { Component, signal } from '@angular/core';
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
  protected readonly title = signal('market-tracker-frontend');
}
