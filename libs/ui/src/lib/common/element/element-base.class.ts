import { ElementRef, Renderer2 } from '@angular/core';

export abstract class BaseElement {

  /**
   * abstract variable which refers to Host ElementRef
   * and ensures class which inherits BaseComponent to set it as public variable
   */
  abstract elem: ElementRef;

  /**
   * abstract variable which refers to Angular Renderer2
   * and ensures class which inherits BaseComponent to set it as public variable
   */
  abstract renderer: Renderer2;  

  /** Convenient way to get native element from ElementRef */
  get hostElement(): HTMLElement { return this.elem.nativeElement; }
  /** Convenient way to get native element name from ElementRef */
  get hostElementName(): string { return this.hostElement.localName; }

  /**
   * utility method to set classNames to host element of the component
   * @param classNames 
   */
  public setHostClass(classNames: string[]) {    
    classNames.forEach(className => {
      // this.logger.debug(`Setting className "${className}" to element "${this.nativeElementName}"`)
      this.renderer.addClass(this.hostElement, className);
    });
  }
}
