import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from 'components/layout';
import axios from 'axios';
import { CampaignCard } from 'components/atom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import IMG1 from 'assets/main.png';

const StyledBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 540px;
  letter-spacing: -0.015em;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  background-position: center center;
`;

const BannerTitle = styled.div`
  font-family: Roboto;
  position: absolute;
  top: 82px;
  left: 285px;
  font-size: 36px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BannerOption = styled.div`
  position: absolute;
  right: 89px;
  bottom: 112px;
  font-size: 18px;
`;
const BannerBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 89px;
  bottom: 38px;
  width: 238px;
  height: 52px;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 34px;
  color: #ff7a00;
`;

const Banner = ({ title, option, backgroundImg }) => {
  return (
    <StyledBanner backgroundImg={backgroundImg}>
      <BannerTitle>{title}</BannerTitle>
      <BannerOption>{option}</BannerOption>
      <BannerBtn>지금 알아보기</BannerBtn>
    </StyledBanner>
  );
};

function MainPage() {
  const [campaignArr, SetCampaignArr] = useState([]);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      <Slider {...settings}>
        <Banner title="캠페인1" option="~00월 00일까지" backgroundImg={IMG1} />
        <Banner title="캠페인2" backgroundImg={IMG1} />
        <Banner title="캠페인3" option="~00월 00일까지" backgroundImg={IMG1} />
      </Slider>
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
