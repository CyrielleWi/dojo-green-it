/**
 * App spacing measurement convention
 * Use the getSpacing function below to compute padding and margin
 */
const SPACING_UNIT = 5;
const MEASUREMENT_UNIT = 'px';

/**
 * Do not use directly the colorPalette in your components
 * Create an entry in the colorUsage below instead
 */
const colorPalette = {
  greyLight: '#e0e0e0',
  greyDark: '#222',
  amberLight: '#FFD54F',
  amber: '#FFC107',
  amberDark: '#FF8F00',
  blueLight: '#F4F9FB',
  white: '#FFFFFF',
  red: '#FF7373',
  blackTransparent: 'rgba(0, 0, 0, 0.24)',
};

/**
 * Use this dictionnary in your components
 * Define a new key each time you use a colour if it's for a different use
 * Ex: fill, border-color, background-color, color ...
 */
export const colorUsage = {
  headerBackground: colorPalette.greyDark,
  primaryTextColor: colorPalette.greyDark,
  primaryLight: colorPalette.amberLight,
  primary: colorPalette.amber,
  primaryDark: colorPalette.amberDark,
  contentBackground: colorPalette.blueLight,
  linkColor: colorPalette.greyDark,
  linkColorHover: colorPalette.amberDark,
  linkColorDisabled: colorPalette.greyLight,
  codeColor: colorPalette.amberDark,
  primaryButtonColor: colorPalette.white,
  primaryButtonBackground: colorPalette.amberDark,
  primaryButtonBackgroundHover: colorPalette.amber,
  primaryButtonBackgroundDisabled: colorPalette.greyLight,
  loaderColorDefault: colorPalette.amberDark,
  error: colorPalette.red,
  inputBackground: colorPalette.white,
  inputBorderColor: colorPalette.blackTransparent,
  inputPlaceholderColor: colorPalette.blackTransparent,
};

export const fontFamily = {
  main: `'Lato', 'Helvetica', 'Arial', sans-serif`,
  title: `'CodyStar', 'Lato', 'Helvetica', 'Arial', sans-serif`,
  subtitle: `'NewsCycle', 'Lato', 'Helvetica', 'Arial', sans-serif`,
  subsubtitle: `'LondrinaShadow', 'Lato', 'Helvetica', 'Arial', sans-serif`,
  code: 'Monospace',
};

export const fontSize = {
  XXLarge: '60px',
  large: '24px',
  medium: '16px',
  small: '14px',
  XSmall: '12px',
};

export const fontWeight = {
  bold: '700',
  normal: '400',
  light: '300',
};

export const lineHeight = {
  large: '36px',
  medium: '24px',
  small: '12px',
};

export const borderRadius = {
  medium: '4px',
  large: '10px',
};

export const getSpacing = (multiplier: number): string =>
  `${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;
