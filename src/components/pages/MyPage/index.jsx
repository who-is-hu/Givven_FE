import React from 'react';
import { useParams, useHistory } from 'react-router';

import NormalMyPage from './NormalMyPage';
import CharityDashboard from './CharityDashboard';
import SellerDashboard from './SellerDashboard';

function MyPage({ props }) {
  const { auth } = useParams();
  const history = useHistory();

  console.log(props);
  switch (auth) {
    case 'normal':
      return <NormalMyPage />;
    case 'charity':
      return <CharityDashboard />;
    case 'seller':
      return <SellerDashboard />;
    default:
      history.goBack();
  }
}

export default MyPage;
