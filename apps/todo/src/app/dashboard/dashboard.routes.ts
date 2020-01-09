import { Route } from '@angular/router';
import { DashboardPage } from './dashboard.component';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardPage
  }
];
