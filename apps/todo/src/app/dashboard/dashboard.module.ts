import { NgModule } from "@angular/core";
import { DashboardPage } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { DASHBOARD_ROUTES } from './dashboard.routes';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ]
})
export class DashboardModule {}