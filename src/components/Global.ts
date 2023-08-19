import {createGlobalStyle} from "styled-components";
import theme from "./Theme";

const Global = createGlobalStyle`
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
    color: #4B5563;
    font-size: 16px;
    line-height: 24px;
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
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }
  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }


`
export default Global;
