import { createGlobalStyle } from 'styled-components';
import { ColorVariables } from './variables';
import { Device } from './breakPoints';

const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    padding: 5rem;
    background: ${ColorVariables.tealColor};
    font-family: Open-Sans, Helvetica, Sans-Serif;

    @media ${Device.mobileS}{
      padding: 2rem;
    }
    
  }

`;

export default GlobalStyles;
