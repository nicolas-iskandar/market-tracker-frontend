import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyDto } from '../../core/dtos/currency.dtos';
import { CurrencyService } from '../../core/services/currency.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, UpperCasePipe, DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  currencies: CurrencyDto[] = [];
  fromCurrency = '';
  toCurrency = '';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getAllCurrencies().subscribe((data) => {
      this.currencies = data;
    });
  }

  onSubmit() {
    this.currencyService
      .getCurrency(this.fromCurrency, this.toCurrency)
      .subscribe((data) => {
        this.currencies.unshift(data);
      });
    this.fromCurrency = '';
    this.toCurrency = '';
  }
}
