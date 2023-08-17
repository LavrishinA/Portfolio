import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from "styled-components";
// import './index.css';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    color: #4B5563;
    font-size: 16px;
    line-height: 24px;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Global/>
        <App/>
    </React.StrictMode>
);

