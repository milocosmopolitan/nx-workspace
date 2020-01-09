import {
  Component,
  OnInit,
  Directive,
  ContentChildren,
  QueryList,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
  ViewChild,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { MatDrawer, MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material';
import { BaseElement } from '../common/element/element-base.class';
import { LayoutSide } from './side/side-container.directive';
import { Side, LayoutSideStatusChangeEvent } from './side/side-container.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'layout',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class Layout {}

@Component({
  selector: 'layout-container',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutContainer extends BaseElement implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(LayoutSide) public sideContainers: QueryList<LayoutSide>;

  @ViewChild('drawerContainerElem', {read: ElementRef, static: true}) public drawerContainerElem: ElementRef;
  @ViewChild('contentWrapperElem', {read: ElementRef, static: true}) public contentWrapperElem: ElementRef;
  @ViewChild('leftDrawer', {read: ElementRef, static: true}) public leftDrawerElem: ElementRef;
  @ViewChild('rightDrawer', {read: ElementRef, static: true}) public rightDrawerElem: ElementRef;
  @ViewChild('leftDrawer', {static: true}) public leftMatDrawer: MatSidenav;
  @ViewChild('rightDrawer', {static: true}) public rightMatDrawer: MatSidenav;
  @ViewChild(MatSidenavContainer, {static: true}) public drawerContainer: MatSidenavContainer;
  @ViewChild(MatSidenavContent, {static: true}) public drawerContent: MatSidenavContent;

  public get leftSideContainer(): LayoutSide {
    return this.sideContainers.find(sideContainer => sideContainer.side === Side.Left);
  }

  public get rightSideContainer(): LayoutSide {
    return this.sideContainers.find(sideContainer => sideContainer.side === Side.Right);
  }

  private _sideContainersSubs = {
    [Side.Left]: Subscription.EMPTY,
    [Side.Right]: Subscription.EMPTY,
  }

  constructor(
    public elem: ElementRef,
    public renderer: Renderer2
  ) {
    super();
    this.setHostClass(['layout-container']);
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.sideContainers.forEach((sideContainer: LayoutSide) => {

      if (sideContainer.side)

      this._sideContainersSubs[sideContainer.side]
        .unsubscribe();

      this._sideContainersSubs[sideContainer.side] = sideContainer.sizeStatusChange
        .subscribe((change: LayoutSideStatusChangeEvent) => {
          this.renderer.setStyle(this.drawerContent.getElementRef().nativeElement, 'margin-left', change.width + 'px');
        });
    })
  }

  ngOnDestroy() {
    this._sideContainersSubs[Side.Left].unsubscribe();
    this._sideContainersSubs[Side.Right].unsubscribe();
  }

}

