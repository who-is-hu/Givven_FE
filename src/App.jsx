import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  HomePage,
  MyPage,
  SignInPage,
  SignUpPage,
  MarketPage,
  MarketDetail,
  CampaignPage,
  CampaignDetail,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/myPage/:auth" component={MyPage} />
      <Route path="/signIn" component={SignInPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/market" exact component={MarketPage} />
      <Route path="/market/:id" component={MarketDetail} />
      <Route path="/campaign" exact component={CampaignPage} />
      <Route path="/campaign/:id" component={CampaignDetail} />
    </BrowserRouter>
  );
}

export default App;
