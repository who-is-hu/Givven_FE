import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import axios from 'axios';
import { CampaignCard } from 'components/atom';

function MainPage() {
  const [campaignArr, SetCampaignArr] = useState([]);

  useEffect(() => {
    axios.get('/campaign/campaigns/ing').then(rsp => {
      SetCampaignArr(rsp.data);
    });
  }, []);

  return (
    <Layout>
      <div>메인페이지</div>
      {campaignArr.map(campaign => (
        <CampaignCard
          key={campaign.id}
          titleImg={campaign.title_img}
          name={campaign.name}
        />
      ))}
    </Layout>
  );
}

export default MainPage;
