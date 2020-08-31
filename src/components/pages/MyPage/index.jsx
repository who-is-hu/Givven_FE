import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from 'components/layout';
import { CampaignCard } from 'components/atom';
import styled from 'styled-components';

const Charge = styled.button`
  outline: none;
`;
function NormalMyPage() {
  const [ingCampaignArr, SetIngCampaignArr] = useState([]);
  const [endCampaignArr, SetEndCampaignArr] = useState([]);
  const [myPoint, SetMyPoint] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/tradeLog/myDonations/ing').then(rsp => {
        console.log(rsp);
        SetIngCampaignArr(rsp.data);
      });
      await axios.get('/tradeLog/myDonations/end').then(rsp => {
        console.log(rsp);
        SetEndCampaignArr(rsp.data);
      });
      await axios.get('/point').then(rsp => {
        console.log(rsp);
        SetMyPoint(rsp.point);
      });
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div>일반회원 마이페이지</div>
      <div>
        <h1>내 포인트: {myPoint}</h1>
        <Charge>충전</Charge>
      </div>
      <div>
        <div>
          진행중인 캠페인{' '}
          {ingCampaignArr.map(campaign => (
            <CampaignCard
              key={campaign.id}
              id={campaign.campaign.id}
              titleImg={campaign.campaign.title_img}
              name={campaign.campaign.name}
              destMoney={campaign.campaign.dest_money}
              currentMoney={campaign.campaign.current_money}
            />
          ))}
        </div>
        <div>
          완료된 캠페인
          {endCampaignArr.map(campaign => (
            <CampaignCard
              key={campaign.id}
              id={campaign.campaign.id}
              titleImg={campaign.campaign.title_img}
              name={campaign.campaign.name}
              destMoney={campaign.campaign.dest_money}
              currentMoney={campaign.campaign.current_money}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default NormalMyPage;
