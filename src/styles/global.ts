import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100vh;
    width: 80%;
    max-width: 800px ;
    margin: auto;
    margin-top: 20px;
    background: #f0f0f5;
    color: #201f1e;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #201f1e;
  }

  button {
    cursor: pointer;
  }

`;
