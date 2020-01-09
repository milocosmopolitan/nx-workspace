import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TodoModule } from './todo/todo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { LayoutModule } from '@workspace/ui';

import { APP_ROUTES } from './app.routes';
import { SideNavModule } from './layout/side-nav/side-nav.module';
import { MatSidenavModule } from '@angular/material';
import { WorkspaceModule } from './layout/workspace/workspace.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    TodoModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    LayoutModule,
    WorkspaceModule,
    SideNavModule,
    MatSidenavModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
