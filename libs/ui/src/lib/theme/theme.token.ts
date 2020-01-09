import { InjectionToken } from '@angular/core';
import { IThemeConfig } from './theme.types';

export const THEME_CONFIG: InjectionToken<IThemeConfig> = new InjectionToken('THEME_CONFIG');
