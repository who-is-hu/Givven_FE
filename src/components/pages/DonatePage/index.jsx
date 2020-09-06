import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout';

const CampaignHeader = styled.h2`
  font-family: Roboto;
  font-size: 2.25rem;
  color: #ffb800;
  letter-spacing: -0.015em;
  margin: 46px 0 0 210px;
`;

const DonationInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 153px;
`;

const CampaignImg = styled.image`
  width: 726px;
  height: 491px;
  background-color: gray;
`;

const DonationDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 699px;
  margin-left: 45px;
`;

const CampaignName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: -0.015em;
`;

const DonationDetailList = styled.ul`
  margin-top: 30px;
  li {
    font-size: 0.875rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 53px;
    letter-spacing: -0.015em;
    margin-top: 18px;
  }
`;

const OneLineContent = styled.li`
  background-color: #e5e5e5;
`;

const DonationDetailLabel = styled.div`
  width: 332px;
`;
const DonationDetailInfo = styled.div`
  width: 340px;
`;

const DonateBtn = styled.button`
  background-color: #ffffff;
  width: 263px;
  height: 65px;
  border: 2px solid #00408b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: -0.015em;
  color: #00408b;
  margin: 65px 0 58px;
  align-self: center;
`;

const BaseProgress = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 39px;
  background-color: #c4c4c4;
`;

const CurrentProgress = styled.div`
  width: 10%;
  height: 39px;
  background-color: #ffb800;
`;

const AfterProgress = styled.div`
  width: 30%;
  height: 39px;
  background-color: #00408b;
`;

const ProgressBar = () => {
  return (
    <BaseProgress>
      <CurrentProgress />
      <AfterProgress />
    </BaseProgress>
  );
};

function DonatePage() {
  const { id } = useParams();
  return (
    <Layout>
      <CampaignHeader>CAMPAIGN</CampaignHeader>
      <DonationInfo>
        <CampaignImg />
        <DonationDetail>
          <CampaignName>캠페인 이름</CampaignName>
          <DonationDetailList>
            <OneLineContent>
              <DonationDetailLabel>캠페인 한줄 설명</DonationDetailLabel>
              <DonationDetailInfo>
                지적장애인을 위한 시설 마련을 지원합니다.
              </DonationDetailInfo>
            </OneLineContent>
            <li>
              <DonationDetailLabel>현재 모금금액</DonationDetailLabel>
              <DonationDetailInfo>100포인트</DonationDetailInfo>
            </li>
            <li>
              <DonationDetailLabel>기부 금액</DonationDetailLabel>
              <DonationDetailInfo>1000포인트</DonationDetailInfo>
            </li>
            <li>
              <DonationDetailLabel>목표 모금금액</DonationDetailLabel>
              <DonationDetailInfo>4000포인트</DonationDetailInfo>
            </li>
            <li>
              <DonationDetailLabel>기부 후 모금금액</DonationDetailLabel>
              <DonationDetailInfo>1100포인트</DonationDetailInfo>
            </li>
            <li>
              <ProgressBar />
            </li>
          </DonationDetailList>
        </DonationDetail>
      </DonationInfo>
      <DonateBtn>기부 확정하기</DonateBtn>
      {/* <span>기부페이지: {id}</span> */}
    </Layout>
  );
}

export default DonatePage;
