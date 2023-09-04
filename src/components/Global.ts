import {createGlobalStyle} from "styled-components";
import theme from "./Theme";



type ThemeProps  = {
    theme: typeof theme,
    currentTheme: "light" | "dark",
}



const Global = createGlobalStyle<ThemeProps>`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color: ${props => props.theme[props.currentTheme].color};
    font-size: 16px;
    line-height: 24px;
    min-width: 360px;
    transition: all .3s;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: unset;
    font-family: inherit;
    color: inherit;
  }

  header {
    background-color: ${props => props.theme[props.currentTheme].primaryBg};
  }

  section:nth-of-type(odd) {
    background-color: ${props => props.theme[props.currentTheme].primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${props => props.theme[props.currentTheme].secondaryBg};
  }

  footer {
    background-color: ${props => props.theme[props.currentTheme].secondaryBg}
  }
  
  

`
export default Global;
