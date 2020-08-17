import React from 'react';
import { useParams } from 'react-router';

function MarketDetail() {
  const { id } = useParams();
  return <div>상점 디테일 : {id}</div>;
}

export default MarketDetail;
