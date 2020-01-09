import { NgModule } from "@angular/core";
import { SideNavComponent } from './side-nav.component';
import {
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatDividerModule,
    RouterModule
  ],
  exports: [SideNavComponent]
})
export class SideNavModule {

}
