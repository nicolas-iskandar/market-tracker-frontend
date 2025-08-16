import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyDto } from '../../core/dtos/currency.dtos';

@Component({
  selector: 'app-dashboard',
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class WishlistComponent {
  currencies: CurrencyDto[] = [
    { from: 'USD', to: 'EUR', rate: 0.8543, lastUpdated: new Date() },
    { from: 'EUR', to: 'JPY', rate: 129.1, lastUpdated: new Date() },
    { from: 'GBP', to: 'USD', rate: 1.34, lastUpdated: new Date() },
    { from: 'JPY', to: 'USD', rate: 0.0091, lastUpdated: new Date() },
  ];
}
