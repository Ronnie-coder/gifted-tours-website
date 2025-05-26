import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:'Inter',sans-serif;
    background:${({theme})=>theme.colours.bg};
    color:${({theme})=>theme.colours.text};
    line-height:1.5;
    -webkit-font-smoothing:antialiased;
  }
  a{color:inherit;text-decoration:none}
  button{font-family:inherit}
`;