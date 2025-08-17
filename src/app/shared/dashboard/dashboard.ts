import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyDto } from '../../core/dtos/currency.dtos';
import { CurrencyService } from '../../core/services/currency.service';
import { FormsModule } from '@angular/forms';
import { Addcurrency } from '../components/addcurrency/addcurrency';
import { WatchListService } from '../../core/services/watchlist.service';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, UpperCasePipe, DecimalPipe, Addcurrency],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  currencies: CurrencyDto[] = [];

  constructor(
    private currencyService: CurrencyService,
    private watchlistService: WatchListService
  ) {}

  ngOnInit(): void {
    this.currencyService.getAllCurrencies().subscribe((data) => {
      this.currencies = data;
    });
  }

  onSubmit(data: { from: string; to: string }) {
    this.currencyService.getCurrency(data.from, data.to).subscribe((data) => {
      this.currencies.unshift(data);
    });
  }

  addToWatchlist(currency: CurrencyDto) {
    this.watchlistService.addCurrency(currency).subscribe();
  }
}
