import { DefaultTheme } from 'styled-components';
import { pattern } from './pattern';

const dark: DefaultTheme = {
  current: 'dark',
  color: {
    elements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
  },
  ...pattern
}

export default dark;