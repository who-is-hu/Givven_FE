import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
  HomePage,
  MyPage,
  SignInPage,
  SignUpPage,
  MarketPage,
  ItemDetailPage,
  MainPage,
  CampaignDetailPage,
  InquiryTransactionPage,
  DonatePage,
  PurchasePage,
  RegisterItemPage,
  RegisterCamgaignPage,
  PurchaseListPage,
  OrderPage,
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
      <Route path="/market/:id" component={ItemDetailPage} />
      <Route path="/main" exact component={MainPage} />
      <Route path="/campaign/:id" component={CampaignDetailPage} />
      <Route path="/transaction" component={InquiryTransactionPage} />
      <Route path="/donate/:id" component={DonatePage} />
      <Route path="/purchase/:id" component={PurchasePage}/>
      <Route path="/registerItem" component={RegisterItemPage} />
      <Route path="/registerCampaign" component={RegisterCamgaignPage} />
      <Route path="/purchaseList/:id" component={PurchaseListPage} />
      <Route path="/order/:id" component={OrderPage} />
    </BrowserRouter>
  );
}

export default Router;
