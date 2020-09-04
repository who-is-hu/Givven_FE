/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import commaNumber from 'comma-number';

import Layout from 'components/layout';
import { Container, Modal, SpinnerScreen, CampaignCard } from 'components/atom';
import DaumPostcode from 'react-daum-postcode';

const Title = styled.h1`
  display: block;
  font-family: Roboto;
  color: #ffb800;
  font-size: 2.25rem;
  margin-top: 40px;
  align-self: flex-start;
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  & > img {
    display: block;
    width: 415px;
    height: 266px;
  }
`;

const ItemInfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  p {
    width: 50%;
    font-size: 0.9rem;
    margin: 0;
  }
  p:last-child {
    width: 50%;
    overflow-wrap: break-word;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: 32px;

  & > h2 {
    font-weight: bold;
    font-size: 2rem;
  }

  ${ItemInfoRow}:first-child {
    background-color: #e5e5e5;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid grey;
  ::placeholder {
    font-size: 0.9rem;
    color: grey;
  }
  :focus {
    outline: none;
  }
`;
const Addr = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  width: 100%;
  height: 26px;
  border-bottom: 1px solid grey;
`;

const Button = styled.div`
  display: flex;
  width: 100px;
  height: 40px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: #009ba5;
  border: 2px solid #009ba5;
  border-radius: 10px;
  align-self: flex-end;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: px 0;
  width: 100%;
  p {
    font-size: 0.8rem;
    margin-top: 4px;
  }
  span {
    color: coral;
    font-weight: 500;
  }
  transition: all 300ms ease;
  background-color: ${props =>
    props.selected ? 'rgba(116, 187, 194, 0.5)' : '#fff'};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  align-self: flex-start;
  margin-top: 40px;
`;

const CampaignList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 32px;
  max-height: ${props => (props.drawer ? '9999px' : '300px')};
  overflow: hidden;
  transition: all 600ms ease;
`;
const NoneNotice = styled.div`
  margin: auto;
  font-size: 1.2rem;
  color: grey;
`;

const PurchaseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 2px solid #00427e;
  color: #00427e;
  background-color: white;
  width: 300px;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 40px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

function PurchasePage() {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [addr, setAddr] = useState('');
  const [item, setItem] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [modal, setModal] = useState(false);

  const loading = useSelector(state => state.shared.loading);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING', loading: true });
      await axios
        .get(`/item/detail/${id}`)
        .then(rsp => {
          console.log(rsp);
          setItem(rsp.data);
          dispatch({ type: 'SET_LOADING', loading: false });
        })
        .catch(err => {
          console.log(err.response);
          alert(err.response);
          dispatch({ type: 'SET_LOADING', loading: false });
        });

      await axios
        .get('/campaign/myCampaigns/end')
        .then(rsp => {
          console.log(rsp);
          setCampaigns(rsp.data);
        })
        .catch(err => {
          console.log(err.reponse);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <Title>SHOP</Title>

          <ItemBox>
            <img src={item.title_img} alt="thumbnail" />
            <ItemInfo>
              <h2>{item.name}</h2>
              <ItemInfoRow>
                <p>상품 한줄 설명</p>
                <p>{item.content}</p>
              </ItemInfoRow>

              <ItemInfoRow>
                <p>구매 개수</p>
                <p>
                  <StyledInput
                    type="text"
                    name="count"
                    onChange={e => setCount(e.target.value)}
                    value={count}
                  />
                </p>
              </ItemInfoRow>
              <ItemInfoRow>
                <p>구매 총액</p>
                <p>{commaNumber(count * item.price)} 원</p>
              </ItemInfoRow>
              <ItemInfoRow>
                <p>배송주소</p>
                <p>
                  <Addr>{addr}</Addr>
                </p>
              </ItemInfoRow>
              <Button onClick={() => setModal(true)}>주소 찾기</Button>
            </ItemInfo>
          </ItemBox>
          <SectionTitle>결제할 캠페인</SectionTitle>
          <CampaignList>
            {campaigns.length === 0 ? (
              <NoneNotice />
            ) : (
              campaigns.map(campaign => (
                <CardWrapper
                  key={campaign.id}
                  selected={campaign.id === selectedCampaign}
                  onClick={() => {
                    setSelectedCampaign(campaign.id);
                  }}
                >
                  <CampaignCard
                    id={campaign.id}
                    name={campaign.name}
                    titleImg={campaign.title_img}
                    destMoney={campaign.dest_money}
                    currentMoney={campaign.current_money}
                    offOnClick
                    onClick={() => {
                      setSelectedCampaign(campaign.id);
                    }}
                  />
                  <p>남은 금액: {commaNumber(campaign.current_money)}</p>
                  <p>
                    결제 후 금액:
                    <span>
                      {commaNumber(campaign.current_money - item.price * count)}
                    </span>
                  </p>
                </CardWrapper>
              ))
            )}
          </CampaignList>
          <PurchaseBtn
            onClick={async () => {
              dispatch({ type: 'SET_LOADING', loading: true });
              await axios
                .post('/item/buy', {
                  itemId: id,
                  orderCount: count,
                  campaignId: selectedCampaign,
                  addr,
                })
                .then(rsp => {
                  console.log(rsp);
                  alert('구매 완료');
                  dispatch({ type: 'SET_LOADING', loading: false });
                  history.goBack();
                })
                .catch(err => {
                  console.log(err.response);
                  alert(err.response.message);
                  dispatch({ type: 'SET_LOADING', loading: false });
                });
            }}
          >
            구매 확정하기
          </PurchaseBtn>
        </Container>
      </Layout>
      <Modal
        visible={modal}
        title="주소 찾기"
        onCloseClick={() => setModal(false)}
        buttons={[
          {
            id: 'close',
            label: '닫기',
            filled: false,
            onClick: () => setModal(false),
          },
        ]}
      >
        <DaumPostcode
          onComplete={data => {
            setAddr(data.address);
            setModal(false);
          }}
        />
      </Modal>
      <SpinnerScreen visible={loading} />
    </>
  );
}

export default PurchasePage;
