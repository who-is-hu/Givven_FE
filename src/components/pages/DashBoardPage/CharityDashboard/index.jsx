import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Layout from 'components/layout';
import { CampaignCard, PurchaseCard } from 'components/atom';

function CharityDashboard() {
  const [ingCampaignArr, SetIngCampaignArr] = useState([]);
  const [endCampaignArr, SetEndCampaignArr] = useState([]);
  const [purchaseArr, SetPurchaseArr] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      await axios
        .get('/campaign/myCampaigns/ing')
        .then(rsp => {
          console.log(rsp);
          SetIngCampaignArr(rsp.data.data);
        })
        .catch(error => {
          console.log(error.response);
        });
      await axios
        .get('/campaign/myCampaigns/end')
        .then(rsp => {
          console.log(rsp);
          SetEndCampaignArr(rsp.data.data);
        })
        .catch(error => {
          console.log(error.response);
        });
      await axios
        .get('/tradeLog/myOrders')
        .then(rsp => {
          console.log(rsp);
          console.log(rsp.data.data);
          SetPurchaseArr(rsp.data.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div>사회단체 대시보드</div>
      <div>
        <button
          type="button"
          onClick={() => {
            history.push('/registCampaign');
          }}
        >
          캠페인 등록
        </button>
      </div>
      <div>
        <div>
          <h1>진행중인 내 캠페인</h1>
          {ingCampaignArr.map(campaign => (
            <CampaignCard
              key={campaign.id}
              id={campaign.campaign.id}
              titleImg={campaign.campaign.title_img}
              name={campaign.campaign.name}
            />
          ))}
        </div>
        <div>
          <h1>완료된 내 캠페인</h1>
          {endCampaignArr.map(campaign => (
            <CampaignCard
              key={campaign.id}
              id={campaign.campaign.id}
              titleImg={campaign.campaign.title_img}
              name={campaign.campaign.name}
            />
          ))}
        </div>
        <div>
          <h1>내 구매목록</h1>
          {purchaseArr.map(purchase => (
            <PurchaseCard
              key={purchase.id}
              id={purchase.id}
              name={purchase.item.name}
              count={purchase.orderCount}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CharityDashboard;
