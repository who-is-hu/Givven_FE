import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import axios from 'axios';
import { CampaignCard } from 'components/atom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainPage() {
  const [campaignArr, SetCampaignArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/campaign/campaigns/ing')
        .then(rsp => {
          console.log(rsp.data);
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
          id={campaign.id}
          titleImg={campaign.title_img}
          name={campaign.name}
          destMoney={campaign.dest_money}
          currentMoney={campaign.current_money}
        />
      ))}
    </Layout>
  );
}

export default MainPage;
