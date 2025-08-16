import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard';
import { WishlistComponent } from './shared/wishlist/wishlist';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'wishlist', component: WishlistComponent },
];
