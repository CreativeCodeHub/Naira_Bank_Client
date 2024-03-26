import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "./font/Poppins-Regular.ttf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${PoppinsRegular});
  }

  @media (max-width: 450px) {
    * {
        margin: 0;
        padding: 0;
        font-family: Poppins;
        box-sizing: border-box;
    }
      
    body {
        width: 100vvw;
        height: 100vh;
        background: #E9E9E9;
    }
  }

`;

export default GlobalStyle;
