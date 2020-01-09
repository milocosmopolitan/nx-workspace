import { Directive, Input, HostBinding } from "@angular/core";

@Directive({
  selector: '[fixed]'
})
export class FixedElementDirective {

  /** Whether the sidenav is fixed in the viewport. */
  @HostBinding('class.position-fixed')
  @Input() public fixed = true;

  /** The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed mode. */
  @HostBinding('style.top.px')
  @Input() public fixedTopGap: number;

  /** The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in fixed mode. */
  @HostBinding('style.bottom.px')
  @Input() public fixedBottomGap: number;

  /** The gap between the left of the sidenav and the top of the viewport when the sidenav is in fixed mode. */
  @HostBinding('style.left.px')
  @Input() public fixedLeftGap: number;

  /** The gap between the right of the sidenav and the bottom of the viewport when the sidenav is in fixed mode. */
  @HostBinding('style.right.px')
  @Input() public fixedRightGap: number;
}
