/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from 'components/layout';
import { CampaignCard, Container, Banner } from 'components/modules';
import IMG1 from 'assets/main.png';

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
      /* setIngCampaigns([
        {
          "id": 1,
          "name": "campaign1",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 0,
          "content": "campaign info..............",
          "due_day": "2021-05-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 1
        },
        {
          "id": 2,
          "name": "campaign2",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 50000,
          "content": "두번째",
          "due_day": "2022-06-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 2
        },
        {
          "id": 3,
          "name": "campaign3",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 50000,
          "content": "3번째",
          "due_day": "2022-06-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 2
        },
        {
          "id": 4,
          "name": "campaign4",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 50000,
          "content": "4번째",
          "due_day": "2022-06-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 2
        },
        {
          "id": 5,
          "name": "campaign5",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 50000,
          "content": "5번째",
          "due_day": "2022-06-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 2
        },
        {
          "id": 6,
          "name": "campaign6",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 50000,
          "content": "6번째",
          "due_day": "2022-06-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 2
        }
      ]
      )
      setEndCampaigns([
        {
          "id": 1,
          "name": "campaign1",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 100000,
          "content": "1번 campaign info..............",
          "due_day": "2020-05-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 1
        },
        {
          "id": 2,
          "name": "campaign2",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 1000000,
          "content": "2번 campaign info..............",
          "due_day": "2020-05-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 1
        },
        {
          "id": 3,
          "name": "campaign2",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 1000000,
          "content": "3번 campaign info..............",
          "due_day": "2020-05-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 1
        },
        {
          "id": 4,
          "name": "campaign2",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 1000000,
          "content": "4번 campaign info..............",
          "due_day": "2020-05-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 1
        },
        {
          "id": 5,
          "name": "campaign2",
          "title_img": "default.png",
          "dest_money": 100000,
          "current_money": 1000000,
          "content": "5번 campaign info..............",
          "due_day": "2020-05-16",
          "createdAt": "2020-05-16T06:14:26.000Z",
          "updatedAt": "2020-05-16T06:14:26.000Z",
          "deletedAt": null,
          "userId": 1
        }
      ]) */
  }, []);

  return (
    <Layout>
      <Slider {...settings}>
        {ingCampaigns.length === 0 ? (
          <Banner
            title="현재 진행중인 캠페인이 없습니다."
            option="xxxx년 xx월 xx일"
            backgroundImg={IMG1}
          />
        ) : ingCampaigns.map((campaign, i) => {
          if(i < 3) {
            return <Banner
              key={campaign.id}
              title={campaign.name}
              option={campaign.due_day}
              backgroundImg={IMG1}
            />
          } 
            return null;
        })}
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
                titleImg={IMG1}
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
                titleImg={IMG1}
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
