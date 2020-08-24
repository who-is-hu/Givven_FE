import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  HomePage,
  MyPage,
  SignInPage,
  SignUpPage,
  MarketPage,
  ItemDetail,
  MainPage,
  CampaignDetail,
  InquiryTransaction,
  Donate,
  Purchase,
  RegisterItem,
  RegisterCampaign,
  PurchaseList,
  Order,
} from 'components/pages';

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/myPage/:auth" component={MyPage} />
      <Route path="/dashbord/:auth" component={MyPage} />
      <Route path="/signIn" component={SignInPage} />
      <Route path="/signUp" component={SignUpPage} />
      <Route path="/market" exact component={MarketPage} />
      <Route path="/market/:id" component={ItemDetail} />
      <Route path="/main" exact component={MainPage} />
      <Route path="/campaign/:id" component={CampaignDetail} />
      <Route path="/transaction" component={InquiryTransaction} />
      <Route path="/donate/:id" component={Donate} />
      <Route path="/purchase/:id" component={Purchase}/>
      <Route path="/registerItem" component={RegisterItem} />
      <Route path="/registerCampaign" component={RegisterCampaign} />
      <Route path="/purchaseList/:id" component={PurchaseList} />
      <Route path="/order/:id" component={Order} />
    </BrowserRouter>
  );
}

export default Router;
