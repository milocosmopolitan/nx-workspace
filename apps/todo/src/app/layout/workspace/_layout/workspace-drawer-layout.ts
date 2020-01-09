import { Component, Inject, Optional, forwardRef, ElementRef, Renderer2 } from "@angular/core";
import { MatDrawer } from '@angular/material/sidenav';
import { BaseElement } from '@workspace/ui';
/**
 * - Handles closing drawer when back button is clicked
 * - Display content in padded area
 */
@Component({
  // tslint:disable-next-line
  selector: 'wx-drawer-layout',
  template: `
  <div class="d-flex">

    <button *ngIf="drawer" class="wx-drawer-back-button" mat-icon-button (click)="drawer.close()">
      <mat-icon>arrow_back</mat-icon>
    </button>

    <div class="wx-drawer-content w-100 d-flex flex-column">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: [
    `
    :host {
      display: block;
      padding: 16px;
    }
    `
  ],
})
export class WorkspaceDrawerLayout extends BaseElement {
  constructor(
    public elem: ElementRef,
    public renderer: Renderer2,
    @Optional() @Inject(forwardRef(() => MatDrawer))
    public drawer: MatDrawer
  ) {
    super();
    this.setHostClass(['wx-drawer-layout'])
  }
}