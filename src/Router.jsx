/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  HomePage,
  MyPage,
  DashBoardPage,
  SignInPage,
  SignUpPage,
  MarketPage,
  ItemDetailPage,
  MainPage,
  CampaignDetailPage,
  InquiryTransactionPage,
  DonatePage,
  PurchasePage,
  RegistItemPage,
  RegistCamgaignPage,
  NotFoundPage,
  DummyPage,
} from 'components/pages';

function Router() {
  const routes = [
    {
      name : "route",
      paths: [
        {path: "/", component: HomePage},
        {path: "/signIn", component: SignInPage},
        {path: "/signUp", component: SignUpPage},
        {path: "/market", component: MarketPage},
        {path: "/market/:id", component: ItemDetailPage},
        {path: "/main", component: MainPage},
        {path: "/campaign/:id", component: CampaignDetailPage},
        {path: "/transaction", component: InquiryTransactionPage},
        {path: "/dummy", component: DummyPage},
        {path: null, component: NotFoundPage}
      ]
    },
    {
      name : "authorityrouter",
      paths: [
        {path: "/myPage", component: MyPage, userTypes: ["normal"]},
        {path: "/dashboard", component: DashBoardPage, userTypes: ["seller", "charity"]},
        {path: "/donate/:id", component: DonatePage, userTypes: ["normal"]},
        {path: "/purchase/:id", component: PurchasePage, userTypes: ["charity"]},
        {path: "/registItem", component: RegistItemPage, userTypes: ["seller"]},
        {path: "/registCampaign", component: RegistCamgaignPage, userTypes: ["charity"]}
      ]
    }
  ];
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          if(route.name === "route") {
            return route.paths.map((data, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Route key={i} path={data.path} exact component={data.component} />
            })
          } if (route.name === "authorityrouter") {
            return  route.paths.map((data, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <AuthorityRouter key={i} path={data.path} exact component={data.component} userTypes={data.userTypes} />
            })
          } return null
        })}
        {/* <Route path="/" exact component={HomePage} />
        <AuthorityRouter
          path="/myPage"
          exact
          component={MyPage}
          userTypes={['normal']}
        />
        <AuthorityRouter
          path="/dashboard"
          exact
          component={DashBoardPage}
          userTypes={['seller', 'charity']}
        />
        <Route path="/signIn" exact component={SignInPage} />
        <Route path="/signUp" exact component={SignUpPage} />
        <Route path="/market" exact component={MarketPage} />
        <Route path="/market/:id" exact component={ItemDetailPage} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/campaign/:id" exact component={CampaignDetailPage} />
        <Route path="/transaction" exact component={InquiryTransactionPage} />
        <AuthorityRouter
          path="/donate/:id"
          exact
          component={DonatePage}
          userTypes={['normal']}
        />
        <AuthorityRouter
          path="/purchase/:id"
          exact
          component={PurchasePage}
          userTypes={['charity']}
        />
        <AuthorityRouter
          path="/registItem"
          exact
          component={RegistItemPage}
          userTypes={['seller']}
        />
        <AuthorityRouter
          path="/registCampaign"
          exact
          component={RegistCamgaignPage}
          userTypes={['charity']}
        />
        <Route path="/dummy" exact component={DummyPage} />
      <Route component={NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}
const AuthorityRouter = ({ userTypes, children, component, ...rest }) => {
  const user = useSelector(state => state.auth.user);
  if (!user) return <Route {...rest} component={SignInPage} />;
  return (
    <Route
      {...rest}
      component={userTypes.includes(user.type) ? component : NotFoundPage}
    />
  );
};

AuthorityRouter.propTypes = {
  userTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.func.isRequired,
};

export default Router;
