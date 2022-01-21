import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      elements: string,
      background: string,
      text: string,
    },
    measure: {
      boxShadow: string,
      borderRadius: string,
    },
    image: {
      themedSelectArrow: string,
    }
  }
}