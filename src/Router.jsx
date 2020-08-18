import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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

function Router() {
  return (
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
  );
}

export default Router;
