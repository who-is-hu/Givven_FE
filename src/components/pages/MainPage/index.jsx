/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from 'components/layout';
import { CampaignCard, Container } from 'components/atom';
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

const Title = styled.h1`
  display: block;
  font-family: Roboto;
  color: #ffb800;
  font-size: 2.25rem;
  margin-top: 40px;
  align-self: flex-start;
`;
const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 80px;
  display: flex;
  color: #00408b;
  align-self: flex-start;
  margin-top: 80px;
`;
const CampaignList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 32px;
  max-height: ${props => (props.drawer ? '9999px' : '270px')};
  overflow: hidden;
  transition: all 600ms ease;
`;
const NoneNotice = styled.div`
  margin: auto;
  font-size: 1.2rem;
  color: grey;
`;

const OpenButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  align-self: flex-end;
  margin-bottom: 20px;
  cursor: pointer;
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

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

function MainPage() {
  const [ingCampaigns, setIngCampaigns] = useState([]);
  const [endCampaigns, setEndCampaigns] = useState([]);
  const [drawer, setDrawer] = useState({
    drawer1: false,
    drawer2: false,
  });
  const settings = {
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
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
          setIngCampaigns(rsp.data);
        })
        .catch(err => {
          console.log(err.response);
        });

      await axios
        .get('/campaign/campaigns/end')
        .then(rsp => {
          console.log(rsp);
          setEndCampaigns(rsp.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Slider {...settings}>
        {ingCampaigns === 0 ? (
          <Banner
            title="캠페인1"
            option="~00월 00일까지"
            backgroundImg={IMG1}
          />
        ) : (
          ingCampaigns.map(campaign => (
            <Banner
              title={campaign.title}
              option={campaign.due_day}
              backgroundImg={campaign.title_img}
            />
          ))
        )}
      </Slider>
      <Container>
        <Title>CAMPAIGN</Title>

        <SectionTitle>ON-GOING</SectionTitle>
        <OpenButton
          onClick={() => setDrawer({ ...drawer, drawer1: !drawer.drawer1 })}
        >
          더보기 {drawer.drawer1 ? '-' : '+'}
        </OpenButton>
        <CampaignList drawer={drawer.drawer1}>
          {ingCampaigns.length === 0 ? (
            <NoneNotice>캠페인이 없습니다.</NoneNotice>
          ) : (
            ingCampaigns.map(campaign => (
              <CampaignCard
                key={campaign.id}
                id={campaign.id}
                titleImg={campaign.title_img}
                name={campaign.name}
                destMoney={campaign.dest_money}
                currentMoney={campaign.current_money}
              />
            ))
          )}
        </CampaignList>
        <SectionTitle>CLOSE-OUT</SectionTitle>
        <OpenButton
          onClick={() => setDrawer({ ...drawer, drawer2: !drawer.drawer2 })}
        >
          더보기 {drawer.drawer2 ? '-' : '+'}
        </OpenButton>
        <CampaignList drawer={drawer.drawer2}>
          {endCampaigns.length === 0 ? (
            <NoneNotice>캠페인이 없습니다.</NoneNotice>
          ) : (
            endCampaigns.map(campaign => (
              <CampaignCard
                key={campaign.id}
                id={campaign.id}
                titleImg={campaign.title_img}
                name={campaign.name}
                destMoney={campaign.dest_money}
                currentMoney={campaign.current_money}
              />
            ))
          )}
        </CampaignList>
      </Container>
    </Layout>
  );
}

export default MainPage;
