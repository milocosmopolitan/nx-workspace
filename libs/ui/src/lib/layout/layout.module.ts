import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout, LayoutContainer } from './layout.component';
import { LayoutContent, LayoutHeader, LayoutFooter } from './layout.directive';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { LayoutSide } from './side/side-container.directive';
import { SideMinimizerButton } from './side/side-minimizer-button.component';
import { ElementUtilityModule } from '../common/element/element.module';



@NgModule({
  declarations: [
    Layout,
    LayoutContainer,
    LayoutContent,
    LayoutSide,
    LayoutHeader,
    LayoutFooter,
    SideMinimizerButton
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ElementUtilityModule
  ],
  exports: [
    Layout,
    LayoutContainer,
    LayoutContent,
    LayoutSide,
    LayoutHeader,
    LayoutFooter,
    SideMinimizerButton
  ]
})
export class LayoutModule { }
