import {
  brandColors,
  gradientColors,
  accentColors,
  primaryColors,
  successColors,
  warningColors,
  errorColors,
  grayscaleColors,
} from './colors'
const theme = {
  colors: {
    ...brandColors,
    ...gradientColors,
    ...accentColors,
    ...primaryColors,
    ...successColors,
    ...warningColors,
    ...errorColors,
    ...grayscaleColors,
    // Set highly reusable, app-specific values
    text: grayscaleColors.gray900,
    background: brandColors.white,
    primary: primaryColors.primary700,
    secondary: brandColors.greentea,
    accent: accentColors.magenta,
    muted: grayscaleColors.gray700,
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 64, 128, 256, 512],
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64], // do we want to use scales for everything, or only when it makes sense? Named values would obviously be easier to remember and easier to extend without needing to refactor.
  // fontSizes.body: fontSizes[2], // We can't follow the guidance of styled-system's aliases due to Typescript error
  fontSizes: {
    //   bodySmaller: 12,
    //   bodySmall: 14,
    body: 16,
    //   bodyLarge: 20,
    //   bodyLarger: 24,
    h1: 48,
    // h1mobile: 42,
    h2: 32,
    h3: 24,
    h4: 20,
    h5: 16,
    h6: 14,
  },
  // fontWeights: [400, 500, 700],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  fonts: {
    sansSerif: 'Inter, "Helvetica Neue", Arial, sans-serif',
    mono: 'Monaco, Consolas, "Lucida Console", monospace',
  },
  // radii: [0, 4],
  radii: {
    square: 0,
    round: 4,
  },
  breakpoints: ['40em', '52em', '64em'],
  // breakpoints: {
  //     small: "40em",
  //     medium: "52em",
  //     large: "64em"
  // },
  shadows: [
    // would we keep shadows as a scale? Are there any clearer descriptive words that we could use?
    '0',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 4px 8px rgba(0, 0, 0, 0.1)',
    '0px 6px 12px rgba(0, 0, 0, 0.1)',
    '0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 10px 20px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.1)',
  ],
}
export default theme
