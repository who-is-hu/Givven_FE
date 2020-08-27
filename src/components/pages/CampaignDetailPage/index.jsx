import React from 'react';
import { useParams } from 'react-router';
import Layout from 'components/layout';

function CampaignDetailPage() {
  const { id } = useParams();
  return <Layout>
    <div>캠페인 디테일 : {id}</div>
  </Layout>;
}

export default CampaignDetailPage;
