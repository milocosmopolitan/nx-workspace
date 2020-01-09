import { Injectable, Inject } from "@angular/core";
import { THEME_CONFIG } from './theme.token';
import { ThemePalette } from './theme.types';

/**
 * Service which allows other component to obtain themeName
 * 
 * for ERROR Error: StaticInjectorError(AppModule)[ThemeService -> InjectionToken THEME_CONFIG]:
 * - Please make sure DSSThemeModule.forRoot is imported on root module.
 */
@Injectable()
export class ThemeService {

  /**
   * Getter method to get themeName as suffix from config provided with ThemeModule.forRoot()
   */
  public get value() {
    return this._theme;
  }

  constructor(
    @Inject(THEME_CONFIG) private _theme: ThemePalette
  ) {
    
  }

  public classNameWithThemeSuffix(className: string) {
    return `${className}-${this._theme}`
  }
}
