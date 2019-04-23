import { tint, shade, readableColor } from 'polished';

// rimble base colors
const baseColor = {
  black: '#000',
  white: '#FFF',
  blue: '#36ADF1',
  green: '#28C081',
  yellow: '#FD9D28',
  red: '#DC2C10',
  blurple: '#4E3FCE',
};

// rimble palette
const colors = {
  blurple: {
    base: baseColor.blurple,
    text: readableColor(baseColor.blurple),
    light: [null, tint(0.9, baseColor.blurple)],
    dark: [null, shade(0.4, baseColor.blurple)],
  },
  blue: {
    base: baseColor.blue,
    light: [null, tint(0.9, baseColor.blue)],
    dark: [null, shade(0.4, baseColor.blue)],
  },
  green: {
    base: baseColor.green,
    light: [null, tint(0.9, baseColor.green)],
    dark: [null, shade(0.4, baseColor.green)],
  },
  yellow: {
    base: baseColor.yellow,
    light: [null, tint(0.9, baseColor.yellow)],
    dark: [null, shade(0.4, baseColor.yellow)],
  },
  red: {
    base: baseColor.red,
    text: readableColor(baseColor.blurple),
    light: [null, tint(0.9, baseColor.red)],
    dark: [null, shade(0.4, baseColor.red)],
  },
};

const blurple = colors.blurple;
const blue = colors.blue;
const green = colors.green;
const yellow = colors.yellow;
const red = colors.red;

export { blurple };
export { blue };
export { green };
export { yellow };
export { red };

export default baseColor;
