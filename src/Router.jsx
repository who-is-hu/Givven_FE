import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        <CheckAuthority path="/myPage/:auth" exact component={MyPage} userType={["normal"]} />
        <CheckAuthority path="/dashboard/:userType" exact component={DashBoard} userType={["seller", "charity"]}/>
        <Route path="/signIn" exact component={SignInPage} />
        <Route path="/signUp" exact component={SignUpPage} />
        <Route path="/market" exact component={MarketPage} />
        <Route path="/market/:id" exact component={ItemDetailPage} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/campaign/:id" exact component={CampaignDetailPage} />
        <Route path="/transaction" exact component={InquiryTransactionPage} />
        <CheckAuthority path="/donate/:id" exact component={DonatePage} userType={["normal"]}/>
        <CheckAuthority path="/purchase/:id" exact component={PurchasePage} userType={["charity"]}/>
        <CheckAuthority path="/registerItem" exact component={RegisterItemPage} userType={["seller"]}/>
        <CheckAuthority path="/registerCampaign" exact component={RegisterCamgaignPage} userType={["charity"]}/>
        <CheckAuthority path="/purchaseList/:id" exact component={PurchaseListPage} userType={["charity"]}/>
        <CheckAuthority path="/order/:id" exact component={OrderPage} userType={["seller"]}/>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
const CheckAuthority = ({component: Component, userType, ...rest}) => {
  console.log(useSelector(state=>state.auth.user));
  const user = useSelector(state => state.auth.user);
  return (
    <Route
      {...rest}
      render={props => {
        if (userType.length < 2) {
          if(user === userType[0]) {
            return <Component {...props}/>
          } else {
            return <NotFoundPage />
          }
        } else if (userType.length === 2) {
          if (user === userType[0] || user === userType[1]) {
            return <Component {...props}/>
          } else {
            return <NotFoundPage />
          }
        } else {
          return <NotFoundPage/>
        }}}
  />
)}

export default Router;
