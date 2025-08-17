import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard';
import { WatchlistComponent } from './shared/watchlist/watchlist';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LogoutComponent } from './features/auth/logout/logout.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
];
