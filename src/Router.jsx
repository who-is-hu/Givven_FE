import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <IsLoggedInRouter path="/myPage/:auth" exact component={MyPage} loggedin={true} />
        <IsLoggedInRouter path="/dashboard/:userType" exact component={DashBoard} loggedin={true}/>
        <Route path="/signIn" exact component={SignInPage} />
        <Route path="/signUp" exact component={SignUpPage} />
        <Route path="/market" exact component={MarketPage} />
        <Route path="/market/:id" exact component={ItemDetailPage} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/campaign/:id" exact component={CampaignDetailPage} />
        <Route path="/transaction" exact component={InquiryTransactionPage} />
        <IsLoggedInRouter path="/donate/:id" exact component={DonatePage} loggedin={true}/>
        <IsLoggedInRouter path="/purchase/:id" exact component={PurchasePage} loggedin={true}/>
        <IsLoggedInRouter path="/registerItem" exact component={RegisterItemPage} loggedin={true}/>
        <IsLoggedInRouter path="/registerCampaign" exact component={RegisterCamgaignPage} loggedin={true}/>
        <IsLoggedInRouter path="/purchaseList/:id" exact component={PurchaseListPage} loggedin={true}/>
        <IsLoggedInRouter path="/order/:id" exact component={OrderPage} loggedin={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
const IsLoggedInRouter = ({component: Component, loggedin, ...rest}) => {
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
