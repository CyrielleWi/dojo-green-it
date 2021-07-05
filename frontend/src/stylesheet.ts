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
  bdazzledBlue: '#2859A2',
  greenSheen: '#6FC2B7',
  middleBlueGreen: '#A9DAD4',
  lavenderBlush: '#FEEEEB',
  greyLight: '#e0e0e0',
  greyDark: '#222',
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
  primaryTextColor: colorPalette.bdazzledBlue,
  primary: colorPalette.bdazzledBlue,
  contentBackground: colorPalette.lavenderBlush,
  secondary: colorPalette.greenSheen,
  secondaryColorLight: colorPalette.middleBlueGreen,
  secondaryTextColor: colorPalette.greenSheen,
  linkColor: colorPalette.greyDark,
  linkColorHover: colorPalette.greenSheen,
  linkColorDisabled: colorPalette.greyLight,
  primaryButtonColor: colorPalette.white,
  primaryButtonBackground: colorPalette.greenSheen,
  primaryButtonBackgroundHover: colorPalette.greenSheen,
  primaryButtonBackgroundDisabled: colorPalette.greyLight,
  loaderColorDefault: colorPalette.bdazzledBlue,
  error: colorPalette.red,
  inputBackground: colorPalette.white,
  inputBorderColor: colorPalette.blackTransparent,
  inputPlaceholderColor: colorPalette.bdazzledBlue,
  inputColor: colorPalette.bdazzledBlue,
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
