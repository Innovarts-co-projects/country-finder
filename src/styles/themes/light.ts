import { DefaultTheme } from 'styled-components';
import { pattern } from './pattern';

const light: DefaultTheme = {
  current: 'light',
  color: {
    elements: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
  },
  ...pattern
}

export default light;