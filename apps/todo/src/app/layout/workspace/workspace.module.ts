import { NgModule } from "@angular/core";
import { WorkspaceContainer } from './workspace-container.component';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTooltipModule,
} from '@angular/material';
import { WorkspaceNav } from './workspace-nav.component';
import { WorkspaceApplicationNav } from './app-nav/workspace-app-nav.component';
import { PortalModule } from '@angular/cdk/portal';
import { WorkspaceDrawerLayout } from './_layout/workspace-drawer-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { WorkspaceSearch } from './search/workspace-search.component';
import { WorkspaceSettings } from './settings/workspace-settings.component';

@NgModule({
  declarations: [    
    WorkspaceDrawerLayout,
    WorkspaceContainer,
    WorkspaceNav, // internal    
    WorkspaceApplicationNav,
    WorkspaceSearch,
    WorkspaceSettings
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    PortalModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    WorkspaceApplicationNav,
    WorkspaceSearch,
    WorkspaceSettings
  ],
  exports: [WorkspaceContainer],
})
export class WorkspaceModule { }