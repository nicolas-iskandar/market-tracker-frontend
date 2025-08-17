import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyDto } from '../../core/dtos/currency.dtos';
import { WatchListService } from '../../core/services/watchlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: 'watchlist.component.html',
  styleUrls: ['watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  currencies: CurrencyDto[] = [];
  loading = true;

  constructor(
    private watchListService: WatchListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('auth_token')) {
      this.router.navigate(['/login']);
      return;
    }

    this.loadWatchlist();
  }

  loadWatchlist() {
    this.watchListService.getWishlist().subscribe({
      next: (data) => {
        this.currencies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load watchlist', err);
        this.loading = false;
      },
    });
  }

  removeCurrency(from: string, to: string) {
    this.watchListService.removeCurrency(from, to).subscribe(() => {
      this.currencies = this.currencies.filter(
        (c) => !(c.from === from && c.to === to)
      );
    });
  }
}
