import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyDto } from '../../core/dtos/currency.dtos';

@Component({
  selector: 'app-dashboard',
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  currencies: CurrencyDto[] = [
    { from: 'USD', to: 'EUR', rate: 0.8543, lastUpdated: new Date() },
    { from: 'USD', to: 'LBP', rate: 89500.0, lastUpdated: new Date() },
    { from: 'USD', to: 'GBP', rate: 0.745, lastUpdated: new Date() },
    { from: 'USD', to: 'JPY', rate: 110.25, lastUpdated: new Date() },
    { from: 'USD', to: 'AUD', rate: 1.35, lastUpdated: new Date() },
    { from: 'USD', to: 'CAD', rate: 1.25, lastUpdated: new Date() },
    { from: 'USD', to: 'CHF', rate: 0.92, lastUpdated: new Date() },
    { from: 'USD', to: 'NZD', rate: 1.43, lastUpdated: new Date() },
    { from: 'USD', to: 'CNY', rate: 6.45, lastUpdated: new Date() },
    { from: 'USD', to: 'INR', rate: 83.2, lastUpdated: new Date() },
    { from: 'EUR', to: 'USD', rate: 1.17, lastUpdated: new Date() },
    { from: 'EUR', to: 'GBP', rate: 0.87, lastUpdated: new Date() },
    { from: 'EUR', to: 'JPY', rate: 129.1, lastUpdated: new Date() },
    { from: 'GBP', to: 'USD', rate: 1.34, lastUpdated: new Date() },
    { from: 'JPY', to: 'USD', rate: 0.0091, lastUpdated: new Date() },
  ];
}
