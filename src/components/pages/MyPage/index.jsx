import React from 'react';
import { useParams, useHistory } from 'react-router';

import NormalMyPage from './NormalMyPage';

function MyPage({ props }) {
  console.log(useParams());
  const { auth } = useParams();
  const history = useHistory();

  console.log(props);
  switch (auth) {
    case 'normal':
      return <NormalMyPage />;
    default:
      history.goBack();
  }
}

export default MyPage;
