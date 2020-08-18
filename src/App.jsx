import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Router from './Router';

const GlobalStyles = createGlobalStyle`
${reset}
a{
  text-decoration: none;
  color:inherit;
}
*{
  box-sizing:border-box;
}
body{
  font-family:-apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:16px;
}
`;

function App() {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;
