import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import {
  HomePage,
  MyPage,
  SignInPage,
  SignUpPage,
  MarketPage,
  ItemDetail,
  CampaignListPage,
  CampaignDetail,
} from './pages';

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
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/myPage/:auth" component={MyPage} />
        <Route path="/signIn" component={SignInPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/market" exact component={MarketPage} />
        <Route path="/market/:id" component={ItemDetail} />
        <Route path="/campaign" exact component={CampaignListPage} />
        <Route path="/campaign/:id" component={CampaignDetail} />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
