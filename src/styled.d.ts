import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    elements: string,
    background: string,
    text: string,
  }
}