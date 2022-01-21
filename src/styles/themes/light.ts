import { DefaultTheme } from 'styled-components';
import { pattern } from './pattern';

import blackArrow from '../../assets/images/icons/black-arrow.png';

const light: DefaultTheme = {
  color: {
    elements: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
  },
  image: {
    themedSelectArrow: blackArrow,
  },
  ...pattern
}

export default light;