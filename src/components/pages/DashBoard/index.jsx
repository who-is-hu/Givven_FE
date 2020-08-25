import React from 'react';
import { useParams, useHistory } from 'react-router';

import CharityDashboard from './CharityDashboard';
import SellerDashboard from './SellerDashboard';

function DashBoard({ props }) {
  const { auth } = useParams();
  const history = useHistory();

  switch (userType) {
    case 'charity':
      return <CharityDashboard />;
    case 'seller':
      return <SellerDashboard />;
    default:
      history.goBack();
  }
}

export default DashBoard;
