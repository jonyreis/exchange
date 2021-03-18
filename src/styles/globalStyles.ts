import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, article, footer, header, nav, section, main {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }


  ul, ol {
    list-style: none;
  }
`;

export const colors = {};
