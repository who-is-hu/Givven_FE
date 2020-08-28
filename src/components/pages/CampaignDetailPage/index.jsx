import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Layout from 'components/layout';

function CampaignDetailPage() {
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const [campaign, SetCampaign] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/campaign/detail/${id}`).then(rsp => {
      SetCampaign(rsp.data);
    });
  }, []);

  const IsNormal = () => {
    if (user.type === 'normal') {
      return (
        <div>
          <button type="submit" onClick={() => history.push(`/donate/${id}`)}>
            기부하기
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <Layout>
      <div>캠페인 디테일 : {id}</div>
      <img src={campaign.title_img} alt="campaign title" />
      <div>{campaign.name}</div>
      {user && IsNormal()}
    </Layout>
  );
}

export default CampaignDetailPage;
