import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import axios from 'axios';
import { CampaignCard } from 'components/atom';

function MainPage() {
  const [campaignArr, SetCampaignArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/campaign/campaigns/ing')
        .then(rsp => {
          SetCampaignArr(rsp.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div>메인페이지</div>
      {campaignArr.map(campaign => (
        <CampaignCard
          key={campaign.id}
          titleImg={campaign.title_img}
          name={campaign.name}
          destMoney={campaign.campaign.dest_money}
          currentMoney={campaign.campaign.current_money}
        />
      ))}
    </Layout>
  );
}

export default MainPage;
