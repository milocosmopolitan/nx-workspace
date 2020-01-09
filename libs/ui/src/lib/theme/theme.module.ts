import { NgModule, ModuleWithProviders } from "@angular/core";
import { ThemeService } from './theme.service';
import { THEME_CONFIG } from './theme.token';
import { ThemePalette } from './theme.types';

/**
 * Theme module allow user to set theme name on root module
 * to assign theme name across whole application
 */
@NgModule({
  providers: [ThemeService]
})
export class ThemeModule {
  static forRoot(theme: ThemePalette): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEME_CONFIG,
          useValue: theme
        },
        ThemeService
      ]
    }
  }
}
