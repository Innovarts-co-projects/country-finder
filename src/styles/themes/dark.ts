import { DefaultTheme } from 'styled-components';
import { pattern } from './pattern';

import whiteArrow from '../../assets/images/icons/white-arrow.png';

const dark: DefaultTheme = {
  color: {
    elements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
  },
  image: {
    themedSelectArrow: whiteArrow,
  },
  ...pattern
}

export default dark;