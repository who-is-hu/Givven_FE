import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import CharityDashboard from './CharityDashboard';
import SellerDashboard from './SellerDashboard';

function DashBoard() {
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  switch (user.type) {
    case 'charity':
      return <CharityDashboard />;
    case 'seller':
      return <SellerDashboard />;
    default:
      history.goBack();
  }
}

export default DashBoard;
