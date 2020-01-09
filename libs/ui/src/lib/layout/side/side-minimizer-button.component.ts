import { Component, ElementRef, Renderer2, OnInit, Inject, forwardRef, Optional, OnDestroy, Input, AfterViewInit, ViewChild } from "@angular/core";
import { MatSidenav } from '@angular/material';
import { BaseElement } from '../../common/element/element-base.class';
import { SideContainerSizeStatus, Side } from './side-container.types';
import { LayoutSide } from './side-container.directive';

interface IButtonProps {
  tooltip: string;
  icon: string;
  ariaLabel: string;
}

const ButtonProps: {[key: string]: IButtonProps} = {
  [SideContainerSizeStatus.Minimized]: {
    tooltip: 'Expand',
    icon: 'menu',
    ariaLabel: 'Expand side panel'
  },
  [SideContainerSizeStatus.Widened]: {
    tooltip: 'Collapse',
    icon: 'chevron_right',
    ariaLabel: 'Collapse side panel'
  },
  [SideContainerSizeStatus.Default]: {
    tooltip: 'Collapse',
    icon: 'chevron_left',
    ariaLabel: 'Collapse side panel'
  }
}

const HostClassName = 'side-minimizer-button';
@Component({
  selector: 'side-minimizer-button',
  template: `
  <button #buttonElem
    aria-title="Side panel toggle button"
    [matTooltip]="buttonProps.tooltip"
    matTooltipPosition="after"
    [fixed]="true"
    [fixedTopGap]="fixedTopGap"
    [fixedBottomGap]="fixedBottomGap"
    [fixedLeftGap]="fixedLeftGap"
    [attr.aria-label]="buttonProps.ariaLabel"
    role="button"
    mat-mini-fab
    (click)="onButtonClick()">
    <mat-icon>{{buttonProps.icon}}</mat-icon>
  </button>
  `
})
export class SideMinimizerButton extends BaseElement implements AfterViewInit {

  @Input() fixedTopGap: number;
  @Input() fixedBottomGap: number;

  @Input() minimizedTo: number;

  @ViewChild('buttonElem', {read: ElementRef, static: true})
  public buttonElem: ElementRef;

  fixedLeftGap: number;
  fixedRightGap: number;

  public buttonProps: IButtonProps;

  constructor(
    public elem: ElementRef,
    public renderer: Renderer2,
    
    @Optional() @Inject(forwardRef(() => LayoutSide))
    private _parentSideContainer: LayoutSide,

    @Optional() @Inject(forwardRef(() => MatSidenav))
    private _parentDrawer: MatSidenav,
  ) {
    super();
    this.setHostClass([ HostClassName ]);

    this.buttonProps = ButtonProps[this.containerSizeStatus];
  }

  ngAfterViewInit() {
    setTimeout(() => this._setFixedPosition(this._parentSideContainer.width));
  }

  private get _containerRects(): any {
    return this._parentSideContainer.hostElement.getClientRects()[0];
  }

  private _setFixedPosition(containerWidth?: number) {
    const { width, x } = this._containerRects;
    console.log(this._containerRects)
    const offsetWidth = (containerWidth ? containerWidth : width) + x;
    const elemWidth = this.buttonElem.nativeElement.getClientRects()[0].width;
    this.fixedLeftGap = offsetWidth - (elemWidth / 2);
  }

  /** @internal */
  public onButtonClick() {
    const {defaultWidth, minWidth, maxWidth} = this._parentSideContainer;
    
    switch (this.containerSizeStatus) {
      case SideContainerSizeStatus.Minimized:
        this._setFixedPosition(defaultWidth);
        this._parentSideContainer.normalizeSize();
        
        break;
      case SideContainerSizeStatus.Widened:
        this._setFixedPosition(defaultWidth);
        this._parentSideContainer.normalizeSize();
        
        break;
      default:
        this._setFixedPosition(minWidth);
        this._parentSideContainer.minimize();
        break;
    }

    this.buttonProps = ButtonProps[this.containerSizeStatus];
  }

  public get containerSizeStatus(): SideContainerSizeStatus {
    return this._parentSideContainer.sizeStatus;
  }
}

