import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import {
  HomePage,
  MyPage,
  DashBoard,
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
  NotFoundPage,
} from 'components/pages';



function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/myPage/:auth" exact component={MyPage} />
      <Route path="/dashboard/:auth" exact component={DashBoard} />
      <Route path="/signIn" exact component={SignInPage} />
      <Route path="/signUp" exact component={SignUpPage} />
      <Route path="/market" exact component={MarketPage} />
      <Route path="/market/:id" exact component={ItemDetailPage} />
      <Route path="/main" exact component={MainPage} />
      <Route path="/campaign/:id" exact component={CampaignDetailPage} />
      <Route path="/transaction" exact component={InquiryTransactionPage} />
      <Route path="/donate/:id" exact component={DonatePage} />
      <Route path="/purchase/:id" exact component={PurchasePage}/>
      <Route path="/registerItem" exact component={RegisterItemPage} />
      <Route path="/registerCampaign" exact component={RegisterCamgaignPage} />
      <Route path="/purchaseList/:id" exact component={PurchaseListPage} />
      <Route path="/order/:id" exact component={OrderPage} />
    </BrowserRouter>
  );
}
const IsLoggedIn = ({component: Component, loggedin, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (loggedin === true) {
          return <Component {...props}/>
      
        } else {
          return <NotFoundPage/>
        }
      }
    }
  />

  )
}

export default Router;
