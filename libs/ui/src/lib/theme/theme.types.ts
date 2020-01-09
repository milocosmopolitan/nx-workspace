import { ThemeService } from './theme.service';


export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

export type ThemePalette = Theme;

export const THEME_PALETTE: ThemePalette[] = [
  Theme.Light,
  Theme.Dark,
];


export interface WithTheme {
  theme: ThemeService
}
