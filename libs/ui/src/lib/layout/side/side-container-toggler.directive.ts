import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener, AfterViewInit, OnDestroy } from "@angular/core";
import { MatDrawer } from '@angular/material';
import { Subscription } from 'rxjs';
import { BaseElement } from '../../common/element/element-base.class';

const HostClass = 'side-toggler'

@Directive({
  selector: '[sideToggler]'
})
export class SideToggler extends BaseElement implements OnInit, AfterViewInit, OnDestroy {


  private _drawer: MatDrawer;
  private _drawerOpenChangeSub: Subscription;

  /**
   * Binging property with Angular Material Drawer component
   */
  @Input()
  public set sideTogglerFor(drawer: MatDrawer) {
    
    if (drawer) {
      this._drawer = drawer;
      const doesHostElementHasPositionClassName = this.hostElement.classList
        .contains(this._sideContainerPositionClassName);
  
      if (!doesHostElementHasPositionClassName) {
        this.setHostClass([this._sideContainerPositionClassName]);
      }
    }
  }

  constructor(
    public elem: ElementRef,
    public renderer: Renderer2,
  ) {
    super();
  }

  ngOnInit() {
    if (!this._drawer) {
      throw Error(`You forgot to provide 'sideTogglerFor' with Angular Material MatDrawer component.`);
    }
    this.setHostClass([
      HostClass
    ]);
  }

  ngOnDestroy() {
    if (this._drawerOpenChangeSub) {
      this._drawerOpenChangeSub.unsubscribe();
    }
  }

  ngAfterViewInit() {
    // this.logger.debug('SideToggler.ngAfterViewInit', this._drawer);
    // Set initial status class
    // this.logger.debug('SideToggler.ngAfterViewInit | Setting initial toggler status className');
    this._setTogglerStatusClassName(this._drawer.opened);

    // subscribe to opened status change
    // this.logger.debug('SideToggler.ngAfterViewInit | Subscribing to MatDrawer openedChange');
    this._drawerOpenChangeSub = this._drawer.openedChange.subscribe(this._setTogglerStatusClassName.bind(this));
  }
  
  @HostListener('click')
  onHostClick() {
    // this.logger.debug('!!!SideToggler', this._drawer);
    this._drawer.toggle();
  }

  private _setTogglerStatusClassName(isOpened: boolean) {
    const openButtonClassName = `${HostClass}-to-open`;
    if (isOpened) {
      this.renderer.removeClass(this.hostElement, openButtonClassName);
    } else {
      this.renderer.addClass(this.hostElement, openButtonClassName);
    }
  }

  private get _sideContainerPositionClassName() {
    return `${HostClass}-${this._drawer.position}`;
  }
}
