import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyDto } from '../../core/dtos/currency.dtos';
import { CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-dashboard',
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  currencies: CurrencyDto[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getAllCurrencies().subscribe((data) => {
      this.currencies = data;
    });
  }
}
