import React from 'react';
import { useParams } from 'react-router';

function CampaignDetail() {
  const { id } = useParams();
  return <div>캠페인 디테일 : {id}</div>;
}

export default CampaignDetail;
