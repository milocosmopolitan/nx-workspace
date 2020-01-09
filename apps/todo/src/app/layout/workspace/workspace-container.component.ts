import { Component, ContentChild, ViewChild } from "@angular/core";
import { ComponentPortal } from '@angular/cdk/portal';
import { MatDrawer } from '@angular/material';
import { WorkspaceApplicationNav } from './app-nav/workspace-app-nav.component';
import { WorkspaceSettings } from './settings/workspace-settings.component';
import { WorkspaceSearch } from './search/workspace-search.component';
import { WorkspaceDrawerKey } from './workspace.types';

@Component({
  selector: 'workspace-container',
  templateUrl: 'workspace-container.component.html',
  styleUrls: ['workspace-container.component.scss']
})
export class WorkspaceContainer {
  public sidePortal: any;
  public drawerKey: WorkspaceDrawerKey|null;

  @ViewChild(MatDrawer, {static: true})
  public drawer: MatDrawer;
  onNavItemSelected(key: WorkspaceDrawerKey) {
    this.drawerKey = key;
    switch(key) {
      case WorkspaceDrawerKey.Applications:
        this.sidePortal = new ComponentPortal(WorkspaceApplicationNav);
        break;
      case WorkspaceDrawerKey.Settings:
        this.sidePortal = new ComponentPortal(WorkspaceSettings);
        break;
      case WorkspaceDrawerKey.Search:
        this.sidePortal = new ComponentPortal(WorkspaceSearch);
        break;
    }
    this.drawer.open();
  }
}