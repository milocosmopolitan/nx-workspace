import { Input, ElementRef, OnInit, Renderer2, Directive, Output, EventEmitter, Optional, Inject, forwardRef, Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { Side, SideContainerStatus, SideContainerSizeStatus, LayoutSideStatusChangeEvent } from './side-container.types';

import { MatSidenav, MatSidenavContainer } from '@angular/material';
import { BaseElement } from '../../common/element/element-base.class';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { LayoutContainer } from '../layout.component';

const HostClassName = 'side-container';
const DefaultClassName = `${HostClassName}-default`;
const MinimizedClassName = `${HostClassName}-minimized`;
const WidenedClassName = `${HostClassName}-widened`;

@Directive({
  selector: 'layout[side]',
  // template: `<ng-content></ng-content>`,
  // encapsulation: ViewEncapsulation.None,
  // animations: [
  //   trigger('toggleMinimize', [
  //     state(MinimizedClassName, style({ width: '20px' } ) ),
  //     state(DefaultClassName, style( { width: '200px'} ) ),
  //     transition(
  //       `${DefaultClassName} <=> ${MinimizedClassName}`,
  //       animate('1ms')
  //     ),
  //   ]),
  // ],
  exportAs: 'side'
})
export class LayoutSide extends BaseElement implements OnInit {

  // @HostBinding('@toggleMinimize')
  // get sizeClassName() {
  //   if (this._sizeStatus === SideContainerSizeStatus.Minimized) {
  //     return MinimizedClassName;
  //   } else if (this._sizeStatus === SideContainerSizeStatus.Widened) {
  //     return WidenedClassName;
  //   } else {
  //     return DefaultClassName;
  //   }
  // }

  /** Width of element */
  @Input() 
  public get defaultWidth() { return this._defaultWidth; }
  public set defaultWidth(val: number) {
    const newValue = coerceNumberProperty(val);
    this._defaultWidth = newValue;
    this.width = newValue;
  }
  private _defaultWidth: number;

  /** Width of element when minimized */
  @Input()
  public get minWidth() { return this._minWidth; }
  public set minWidth(val: number) {
    const newValue = coerceNumberProperty(val);
    this._minWidth = newValue; 
  }
  private _minWidth: number;

  /** Width of element when widen */
  @Input()
  public get maxWidth() { return this._maxWidth; }
  public set maxWidth(val: number) {
    const newValue = coerceNumberProperty(val);
    this._maxWidth = newValue; 
  }
  private _maxWidth: number;

  @HostBinding('style.width.px')
  public width: number;
  
  private _status: SideContainerStatus;
  private _sizeStatus: SideContainerSizeStatus = SideContainerSizeStatus.Default;

  @Input() public side: Side = Side.Left;

  @Input() opened: boolean;

  /** Whether the sidenav is fixed in the viewport. */
  @Input()
  public get fixedInViewport() { return this._fixedInViewport; }
  public set fixedInViewport(val: boolean) {
    if (this._fixedInViewport !== val) {
      this._fixedInViewport = val;
      this._setParentSidenavProp('fixedInViewport', this._fixedInViewport);
    }
  }
  private _fixedInViewport: boolean;

  /** The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed mode. */
  @Input()
  public get fixedTopGap() { return this._fixedTopGap; }
  public set fixedTopGap(val: number) {
    if (this._fixedTopGap !== val) {
      this._fixedTopGap = val;
      this._setParentSidenavProp('fixedTopGap', this._fixedTopGap);
    }
  }
  private _fixedTopGap: number;

  /** The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in fixed mode. */
  @Input()
  public get fixedBottomGap() { return this._fixedBottomGap; }
  public set fixedBottomGap(val: number) {
    if (this._fixedBottomGap !== val) {
      this._fixedBottomGap = val;
      this._setParentSidenavProp('fixedBottomGap', this._fixedBottomGap);
    }
  }
  private _fixedBottomGap: number;

  @Input() public disableMinimize: boolean;


  public get sizeStatus() { return this._sizeStatus; }
  @Output() public sizeStatusChange: EventEmitter<LayoutSideStatusChangeEvent> = new EventEmitter();

  public get status() { return this._status; }

  public get isOpen() {
    return this._status === SideContainerStatus.Opened;
  }
  
  public get minimized(): boolean {
    return this._sizeStatus === SideContainerSizeStatus.Minimized;
  }

  public get widened(): boolean {
    return this._sizeStatus === SideContainerSizeStatus.Widened;
  }

  constructor(
    public elem: ElementRef,
    public renderer: Renderer2,    
    @Optional() @Inject(forwardRef(() => MatSidenav))
    private parentDrawer: MatSidenav
  ) {
    super();
  }

  private _setParentSidenavProp(key: string, value: any) {
    if (this.parentDrawer) {
      this.parentDrawer[key] = value;  
    }
  }

  ngOnInit() {
    this.setHostClass([
      HostClassName,
      // this.themeClassName,
      this._sideClassName
    ]);
  }

  public toggle() {
    if (this.status === SideContainerStatus.Closed) {
      this.open();
    } else {
      this.close();
    }
  }

  public open() {
    this._status = SideContainerStatus.Opened;

    if (this.parentDrawer) {
      this.parentDrawer.open();
    }

    // this.logger.debug('SideContainer')
  }

  public close() {
    this._status = SideContainerStatus.Closed;

    if (this.parentDrawer) {
      this.parentDrawer.close();
    }
  }

  /**
   * method to minimize container size
   */
  public minimize() {
    // console.log(this.layoutContainer.drawerContent)
    // this.logger.debug('SideContainer.minimize');
    // this.sizeStatusChange.emit(this._sizeStatus);
    this._sizeStatus = SideContainerSizeStatus.Minimized;
    this.renderer.addClass(this.hostElement, MinimizedClassName);
    this.width = this.minWidth;
    // const containerElem = this.layoutContainer.drawerContent.getElementRef().nativeElement;
    // this.renderer.setStyle(containerElem, 'margin-left', `${this.width}px`);
    this.sizeStatusChange.emit({ status: this._sizeStatus, width: this.width });
    // setTimeout(() => {
    //   this.logger.debug('SideContainer.minimize end');
    //   this.sizeStatusChange.emit(this._sizeStatus);
    // }, 400);
  }

  /**
   * method to normalize container size
   */
  public normalizeSize() {
    // this.logger.debug('SideContainer.normalizeSize');
    // this.sizeStatusChange.emit(this._sizeStatus);
    this._sizeStatus = SideContainerSizeStatus.Default;
    this.renderer.removeClass(this.hostElement, MinimizedClassName);
    this.renderer.removeClass(this.hostElement, WidenedClassName);
    this.width = this.defaultWidth;
    // const containerElem = this.layoutContainer.drawerContent.getElementRef().nativeElement;
    // this.renderer.setStyle(containerElem, 'margin-left', `${this.width}px`);
    this.sizeStatusChange.emit({ status: this._sizeStatus, width: this.width });
    // setTimeout(() => {
    //   this.sizeStatusChange.emit(this._sizeStatus);
    // }, 400);
  }

  /**
   * method to widen container size
   */
  public widen() {
    // this.logger.debug('SideContainer.widen');
    // this.sizeStatusChange.emit(this._sizeStatus);
    this._sizeStatus = SideContainerSizeStatus.Widened;
    this.renderer.addClass(this.hostElement, WidenedClassName);
    this.width = this.maxWidth;
    // const containerElem = this.layoutContainer.drawerContent.getElementRef().nativeElement;
    // this.renderer.setStyle(containerElem, 'margin-left', `${this.width}px`);
    this.sizeStatusChange.emit({ status: this._sizeStatus, width: this.width });
    // setTimeout(() => {
    //   this.sizeStatusChange.emit(this._sizeStatus);
    // }, 400);
  }

  // /**
  //  * theme class name for host element
  //  */
  // public get themeClassName() {
  //   return this.theme.classNameWithThemeSuffix(HostClassName);
  // }

  private get _sideClassName(): string {
    return `${HostClassName}-${this.side}`;
  }

}
