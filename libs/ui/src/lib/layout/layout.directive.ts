import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseElement } from '../common/element/element-base.class';

@Directive({
  selector: 'layout[content]',
})
export class LayoutContent extends BaseElement {

  constructor(
    public elem: ElementRef,
    public renderer: Renderer2
  ) {
    super();
    this.setHostClass(['layout-content'])
  }
}

@Directive({
  selector: 'layout[header]',
})
export class LayoutHeader extends BaseElement {

  constructor(
    public elem: ElementRef,
    public renderer: Renderer2
  ) {
    super();
    this.setHostClass(['layout-header'])
  }
}

@Directive({
  selector: 'layout[footer]',
})
export class LayoutFooter extends BaseElement {

  constructor(
    public elem: ElementRef,
    public renderer: Renderer2
  ) {
    super();
    this.setHostClass(['layout-footer'])
  }
}