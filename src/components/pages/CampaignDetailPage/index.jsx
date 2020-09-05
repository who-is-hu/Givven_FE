import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Layout from 'components/layout';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px 230px;
  display: flex;
  flex-direction: column;
`;

const MainText = styled.h1`
  font-family: Roboto;
  font-size: 36px;
  line-height: 42px;
  color: #ffb800;
  width: 100%;
  height: 100%;
  margin-bottom: 130px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  display: block;
  margin-right: 65px;
  width: 730px;
  height: 490px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100%;
  align-items: flex-end;
`;

const TextSubContainer = styled.div`
  display: flex;
  align-items: center;
  width: 665px;
  height: 35px;
  margin-bottom: 20px;
  padding-left: 5px;
`;

const TextSubContainerTwo = styled(TextSubContainer)`
  background-color: #e5e5e5;
`;

const CampaignName = styled.h1`
  width: 100%;
  font-family: Montesrrat;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
`;

const Text = styled.span`
  display: inline-block;
  width: 330px;
  font-family: Montesrrat;
  font-size: 14px;
  line-height: 35px;
`;

const Progress = styled.div`
  width: 665px;
  height: 40px;
  background-color: #adadad;
  margin-bottom: 40px;
`;

const Bar = styled.div`
  width: ${prop => prop.rate}%;
  max-width: 100%;
  height: 40px;
  background-color: #00408b;
  text-align: center;
`;

const ProgressBarText = styled.span`
  font-family: Montesrrat;
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  color: #fff;
`;

const Button = styled.button`
  width: 200px;
  height: 65px;
  font-family: Montserrat;
  font-weight: bold;
  line-height: 30px;
  font-size: 24px;
  color: #01656b;
  border: 2px solid #009ba5;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const DetailContainer = styled.div`
  padding: 30px;
`;

const Tabs = styled.div`
  display: flex;
  padding-left: 50px;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2px;
  width: 200px;
  height: 65px;
  font-family: Montserrat;
  font-weight: bold;
  line-height: 30px;
  font-size: 20px;
  color: #01656b;
  border: 2px solid #009ba5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  border-bottom: ${prop =>
    prop.selected ? '2px solid #fff' : '2px solid #009ba5'};
`;

const DetailTab = styled(Tab)``;

const TransactionTab = styled(Tab)`
  left: -2px;
`;

const DetailInfo = styled.div`
  min-height: 600px;
  padding: 20px;
  font-family: Montserrat;
  font-size: 24px;
  border: 2px solid #009ba5;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > thead {
    margin-bottom: 40px;
    font-weight: 600;
  }

  tbody {
    margin-bottom: 30px;
  }
`;

const Tr = styled.tr`
  display: flex;
  justify-content: space-around;
  td {
    width: 150px;
  }
  td:nth-child(5) {
    width: 200px;
  }
  a {
    :hover {
      color: #00408b;
    }
  }
`;

function CampaignDetailPage() {
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const [campaign, SetCampaign] = useState({});
  const [tradeLog, SetTradeLog] = useState({});
  const [dueDate, SetDueDate] = useState('');
  const [isDetailTabSelected, SetIsDetailTabSelected] = useState(true);
  const [isTransactionTabSelected, SetIsTransactionTabSelected] = useState(
    false,
  );

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/campaign/detail/${id}`).then(rsp => {
      SetCampaign(rsp.data);
      SetDueDate(rsp.data.due_day);
      console.log(rsp.data);
    });
    axios.get(`/tradeLog/ordersByCampaign/${id}`).then(rsp => {
      console.log(rsp);
      SetTradeLog(rsp.data);
    });
  }, []);

  return (
    <Layout>
      <Container>
        <MainText>CAMPAIGN</MainText>
        <InfoContainer>
          <Img src={campaign.title_img} alt="thumbnail" />
          <TextContainer>
            <CampaignName>{campaign.name}</CampaignName>
            <TextSubContainerTwo>
              <Text>캠페인 한 줄 설명</Text>
              <Text>{campaign.name}</Text>
            </TextSubContainerTwo>
            <TextSubContainer>
              <Text>마감 기한</Text>
              <Text>{dueDate.substr(0, 10)}</Text>
            </TextSubContainer>
            <TextSubContainer>
              <Text>현재 모금액</Text>
              <Text>{campaign.current_money}</Text>
            </TextSubContainer>
            <TextSubContainer>
              <Text>목표 모금액</Text>
              <Text>{campaign.dest_money}</Text>
            </TextSubContainer>
            <Progress>
              <Bar
                rate={
                  (campaign.current_money / campaign.dest_money).toFixed(2) *
                  100
                }
              >
                <ProgressBarText>
                  {(campaign.current_money / campaign.dest_money).toFixed(2) *
                    100}
                  %
                </ProgressBarText>
              </Bar>
            </Progress>
            {user.type === 'normal' ? (
              <Button
                type="submit"
                onClick={() => history.push(`/donate/${id}`)}
              >
                지금 함께하기
              </Button>
            ) : null}
          </TextContainer>
        </InfoContainer>
        <DetailContainer>
          <Tabs>
            <DetailTab
              selected={isDetailTabSelected}
              onClick={() => {
                SetIsDetailTabSelected(true);
                SetIsTransactionTabSelected(false);
              }}
            >
              상세정보
            </DetailTab>
            <TransactionTab
              selected={isTransactionTabSelected}
              onClick={() => {
                SetIsDetailTabSelected(false);
                SetIsTransactionTabSelected(true);
              }}
            >
              구매내역
            </TransactionTab>
          </Tabs>
          <DetailInfo>
            {isDetailTabSelected ? (
              campaign.content
            ) : (
              <Table>
                <thead>
                  <Tr>
                    <td>상품이름</td>
                    <td>상품가격</td>
                    <td>상품수량</td>
                    <td>총 금액</td>
                    <td>transactionId</td>
                  </Tr>
                </thead>
                {tradeLog.map(order => (
                  <tbody key={order.id}>
                    <Tr>
                      <td>{order.item.name}</td>
                      <td>{order.item.price}</td>
                      <td>{order.orderCount}</td>
                      <td>{order.item.price * order.orderCount}</td>
                      <td>
                        <a
                          href={`https://kovan.etherscan.io/tx/${order.transactionId}`}
                          title={order.transactionId}
                        >
                          {order.transactionId.substr(0, 12)}...
                        </a>
                      </td>
                    </Tr>
                  </tbody>
                ))}
              </Table>
            )}
          </DetailInfo>
        </DetailContainer>
      </Container>
    </Layout>
  );
}

export default CampaignDetailPage;
