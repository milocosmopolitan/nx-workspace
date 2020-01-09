import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule, ElementUtilityModule } from '@workspace/ui';
import { SideNavModule } from '../layout/side-nav/side-nav.module';
import { TodoHeaderComponent } from './todo-header/todo-header.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoHeaderComponent
  ],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    SideNavModule,
    ElementUtilityModule
  ]
})
export class TodoModule { }
