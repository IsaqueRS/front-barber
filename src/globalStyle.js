import { createGlobalStyle } from "styled-components";

const fontImport = `
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap');
`;

const GlobalStyle = createGlobalStyle`
${fontImport}


  * {
    font-family: "Montserrat", sans-serif;;
  }
`;

export default GlobalStyle;


