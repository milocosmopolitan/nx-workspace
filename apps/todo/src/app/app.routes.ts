import { Route } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: TodoComponent
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
]