import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import commaNumber from 'comma-number';

import Layout from 'components/layout';
import { CampaignCard, Container, Modal, SpinnerScreen } from 'components/atom';
import ChangePointContent from './ChangePointModalContent';

const Title = styled.h1`
  display: block;
  font-family: Roboto;
  color: #ffb800;
  font-size: 2.25rem;
  margin-top: 40px;
  align-self: flex-start;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  & > p {
    font-size: 1.5rem;
  }
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  margin-top: 60px;

  & > p {
    font-size: 1.125rem;
    color: #00408b;
    letter-spacing: -0.015em;
    margin-top: 8px;
  }

  span {
    font-weight: 700;
  }
`;

const ChangePointButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-top: 40px;
  color: #00427e;
  background-color: white;
  padding: 5px;
  font-size: 1.1rem;
  border: 3px solid #00427e;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    color: #fff;
    background-color: #0996cc;
  }
  transition: all 200ms ease;
`;

const CampaignListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 100px;
`;
const SectionTitle = styled.h3`
  font-size: 1.5rem;
  display: flex;
`;

const CreateItemBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  color: #00427e;
  background-color: white;
  padding: 5px;
  font-size: 1rem;
  border: 2px solid #009ba5;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    color: #fff;
    background-color: #0996cc;
  }
  transition: all 200ms ease;
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

const ModalContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 32px;

  p {
    font-size: 0.875rem;
    font-weight: 500;
  }

  & > img {
    width: 290px;
    height: 290px;
  }
`;

const ModalInfoRow = styled.div`
  display: flex;
  width: 100%;

  p:first-child {
    max-width: 100px;
  }
  p {
    flex: 1;
  }
`;
const ModalInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  ${ModalInfoRow} ~ ${ModalInfoRow} {
    margin-top: 8px;
  }
`;

const Tr = styled.tr`
  display: flex;
  cursor: pointer;
  transition: all 200ms linear;
  padding: 10px 0;
  :hover {
    background-color: #e0e0e0;
  }

  td {
    width: 15%;
  }

  td:nth-child(3) {
    width: 8%;
  }
  td:nth-child(5) {
    flex: 1;
  }
`;
const Table = styled.table`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 16px 32px;
  width: 80%;
  font-size: 1rem;
  margin: 0 auto;

  ${Tr} ~ ${Tr} {
    margin-top: 20px;
  }
  & > thead {
    margin-bottom: 20px;
    font-weight: 700;
  }
`;

function SellerDashboard() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [point, setPoint] = useState(0);
  const [myPoint, setMyPoint] = useState(0);
  const [selectOrder, setSelectOrder] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [orderModal, setOrderModal] = useState(false);
  const [chanePointModal, setChangePointModal] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.shared.loading);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/item/myItems').then(rsp => {
        console.log(rsp);
        setItems(rsp.data);
      });
      await axios.get('/tradeLog/myOrders').then(rsp => {
        console.log(rsp);
        setOrders(rsp.data);
      });
      await axios.get('/point').then(rsp => {
        console.log(rsp);
        setMyPoint(rsp.data);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <Title>DASHBOARD</Title>
          <ProfileBox>
            <p>반가워요! {user.name}님</p>
            <p>
              기쁜에서 <span>{items.length}개</span>의 상품을 판매중이에요!
            </p>
            <InfoRow>
              <p>상호명</p>
              <p>{user.name}</p>
            </InfoRow>
            <InfoRow>
              <p>아이디</p>
              <p>{user.email}</p>
            </InfoRow>
            <InfoRow>
              <p>나의 코인</p>
              <p>{commaNumber(myPoint)}원 </p>
            </InfoRow>
            <ChangePointButton onClick={() => setChangePointModal(true)}>
              환전하기
            </ChangePointButton>
          </ProfileBox>

          <CampaignListBox>
            <SectionHeader>
              <SectionTitle>판매중인 상품</SectionTitle>
              <CreateItemBtn onClick={() => history.push('/registItem')}>
                상품 등록
              </CreateItemBtn>
            </SectionHeader>
            <OpenButton onClick={() => setDrawer(!drawer)}>
              더보기 {drawer ? '-' : '+'}
            </OpenButton>
            <CampaignList drawer={drawer}>
              {items.length === 0 ? (
                <NoneNotice>상품이 없습니다.</NoneNotice>
              ) : (
                () =>
                  items.map(campaign => (
                    <CampaignCard
                      key={campaign.id}
                      id={campaign.id}
                      titleImg={campaign.title_img}
                      name={campaign.name}
                      destMoney={campaign.dest_money}
                      currentMoney={campaign.current_money}
                    />
                  ))()
              )}
            </CampaignList>
          </CampaignListBox>

          <SectionHeader>
            <SectionTitle>주문 내역</SectionTitle>
          </SectionHeader>
        </Container>
        <Table>
          <thead>
            <Tr>
              <td>캠페인 이름</td>
              <td>구입 상품</td>
              <td>개수</td>
              <td>판매자 이름</td>
              <td>주소지</td>
              <td>총액</td>
            </Tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <NoneNotice>주문내역이 없습니다.</NoneNotice>
            ) : (
              orders.map(order => (
                <Tr
                  key={order.id}
                  onClick={() => {
                    setSelectOrder(order);
                    setOrderModal(true);
                  }}
                >
                  <td>{order.campaign.name}</td>
                  <td>{order.item.name}</td>
                  <td>{order.orderCount}</td>
                  <td>{order.seller.name}</td>
                  <td>{order.addr}</td>
                  <td>{commaNumber(order.item.price * order.orderCount)}원</td>
                </Tr>
              ))
            )}
          </tbody>
        </Table>
      </Layout>
      <Modal
        visible={orderModal}
        title="구매한 상품"
        onCloseClick={() => setOrderModal(false)}
        buttons={[
          {
            id: 'itemDetail',
            label: '닫기',
            filled: false,
            onClick: () => setOrderModal(false),
          },
        ]}
      >
        {selectOrder && (
          <ModalContentContainer>
            <img src={selectOrder.item.title_img} alt="itemImg" />
            <ModalInfoBox>
              <ModalInfoRow>
                <p>캠페인 이름</p>
                <p>{selectOrder.campaign.name}</p>
              </ModalInfoRow>
              <ModalInfoRow>
                <p>상품이름</p>
                <p>{selectOrder.item.name}</p>
              </ModalInfoRow>
              <ModalInfoRow>
                <p>판매자 이름</p>
                <p>{selectOrder.seller.name}</p>
              </ModalInfoRow>
              <ModalInfoRow>
                <p>주소</p>
                <p>{selectOrder.addr}</p>
              </ModalInfoRow>
              <ModalInfoRow>
                <p>주문수량</p>
                <p>{selectOrder.orderCount}</p>
              </ModalInfoRow>
              <ModalInfoRow>
                <p>주문금액</p>
                <p>
                  {commaNumber(selectOrder.orderCount * selectOrder.item.price)}
                  원
                </p>
              </ModalInfoRow>
            </ModalInfoBox>
          </ModalContentContainer>
        )}
      </Modal>
      <Modal
        visible={chanePointModal}
        title="환전 하기"
        onCloseClick={() => setChangePointModal(false)}
        buttons={[
          {
            id: 'changePoint',
            label: '환전하기',
            filled: true,
            onClick: async () => {
              dispatch({ type: 'SET_LOADING', loading: true });
              await axios
                .post('/point/change', {
                  value: point,
                })
                .then(rsp => {
                  console.log(rsp);
                  dispatch({ type: 'SET_LOADING', loading: false });
                  alert('환전 완료');
                })
                .catch(err => {
                  console.log(err.response);
                  dispatch({ type: 'SET_LOADING', loading: false });
                  alert('환전 실패');
                  setPoint(0);
                  setChangePointModal(false);
                });
            },
          },
        ]}
      >
        <ChangePointContent point={point} setPoint={setPoint} />
      </Modal>
      <SpinnerScreen visible={loading} />
    </>
  );
}

export default SellerDashboard;
