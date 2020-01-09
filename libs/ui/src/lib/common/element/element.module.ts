import { NgModule } from "@angular/core";
import { FixedElementDirective } from './fixed-element.directive';

@NgModule({
  declarations: [FixedElementDirective],
  exports: [FixedElementDirective],
})
export class ElementUtilityModule {}