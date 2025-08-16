import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyDto } from '../../core/dtos/currency.dtos';
import { WishListService } from '../../core/services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.css'],
})
export class WishlistComponent implements OnInit {
  currencies: CurrencyDto[] = [];
  loading = true;

  constructor(
    private wishListService: WishListService,
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
    this.wishListService.getWishlist().subscribe({
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
    this.wishListService.removeCurrency(from, to).subscribe(() => {
      this.currencies = this.currencies.filter(
        (c) => !(c.from === from && c.to === to)
      );
    });
  }
}
