import React from 'react';
import { useParams, useHistory } from 'react-router';

import NormalMyPage from './NormalMyPage';
import CharityMyPage from './CharityMyPage';
import SellerMyPage from './SellerMyPage';

function MyPage({ props }) {
  const { auth } = useParams();
  const history = useHistory();

  console.log(props);
  switch (auth) {
    case 'normal':
      return <NormalMyPage />;
    case 'charity':
      return <CharityMyPage />;
    case 'seller':
      return <SellerMyPage />;
    default:
      history.goBack();
  }
}

export default MyPage;
