import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import commaNumber from 'comma-number';

import Layout from 'components/layout';
import { CampaignCard, Container, Modal, SpinnerScreen } from 'components/atom';

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
const ChargeButton = styled.button`
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
const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 80px;
  display: flex;
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
  flex-direction: column;
  padding: 16px 32px;

  & > p {
    font-size: 1rem;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  width: 80%;
  height: 40px;
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 400;

  ::placeholder {
    font-size: 1rem;
    color: grey;
  }
`;

function NormalMyPage() {
  const [ingDonations, setIngDonations] = useState([]);
  const [endDonations, setEndDonations] = useState([]);
  const [myPoint, SetMyPoint] = useState();
  const [drawer, setDrawer] = useState({
    drawer1: false,
    drawer2: false,
  });
  const [modal, setModal] = useState(false);
  const [willChargePoint, setWillChargePoint] = useState(0);

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.shared.loading);

  const getMyDonationMoney = () => {
    const ingTotal = ingDonations.reduce(
      (total, donation) => total + donation.value,
      0,
    );
    const endTotal = endDonations.reduce(
      (total, donation) => total + donation.value,
      0,
    );
    return ingTotal + endTotal;
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('/tradeLog/myDonations/ing').then(rsp => {
        console.log(rsp);
        setIngDonations(rsp.data);
      });
      await axios.get('/tradeLog/myDonations/end').then(rsp => {
        console.log(rsp);
        setEndDonations(rsp.data);
      });
      await axios.get('/point').then(rsp => {
        console.log(rsp);
        SetMyPoint(rsp.data);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <Title>MY PAGE</Title>
          <ProfileBox>
            <p>반가워요! {user.name}님</p>
            <p>
              기쁜과 <span>{commaNumber(getMyDonationMoney())}원</span> 만큼
              함께하고 있어요.
            </p>
            <InfoRow>
              <p>이름</p>
              <p>{user.name}</p>
            </InfoRow>
            <InfoRow>
              <p>아이디</p>
              <p>{user.email}</p>
            </InfoRow>
            <InfoRow>
              <p>나의 코인</p>
              <p>{commaNumber(myPoint)}</p>
            </InfoRow>
            <ChargeButton onClick={() => setModal(true)}>충전하기</ChargeButton>
          </ProfileBox>

          <CampaignListBox>
            <SectionTitle>진행중인 참여 캠페인</SectionTitle>
            <OpenButton
              onClick={() => setDrawer({ ...drawer, drawer1: !drawer.drawer1 })}
            >
              더보기 {drawer.drawer1 ? '-' : '+'}
            </OpenButton>
            <CampaignList drawer={drawer.drawer1}>
              {ingDonations.length === 0 ? (
                <NoneNotice>캠페인이 없습니다.</NoneNotice>
              ) : (
                () =>
                  ingDonations.map(({ campaign, ...rest }) => (
                    <CampaignCard
                      key={rest.id}
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
          <CampaignListBox>
            <SectionTitle>완료된 참여 캠페인</SectionTitle>
            <OpenButton
              onClick={() => setDrawer({ ...drawer, drawer2: !drawer.drawer2 })}
            >
              더보기 {drawer.drawer2 ? '-' : '+'}
            </OpenButton>

            <CampaignList drawer={drawer.drawer2}>
              {endDonations.length === 0 ? (
                <NoneNotice>캠페인이 없습니다.</NoneNotice>
              ) : (
                endDonations.map(({ campaign, ...rest }) => (
                  <CampaignCard
                    key={rest.id}
                    id={campaign.id}
                    titleImg={campaign.title_img}
                    name={campaign.name}
                    destMoney={campaign.dest_money}
                    currentMoney={campaign.current_money}
                  />
                ))
              )}
            </CampaignList>
          </CampaignListBox>
        </Container>
      </Layout>
      <Modal
        visible={modal}
        title="포인트 충전"
        onCloseClick={() => setModal(false)}
        buttons={[
          {
            id: 'chargeBtn',
            label: '충전하기',
            filled: true,
            onClick: async () => {
              console.log(willChargePoint);

              if (willChargePoint !== 0) {
                dispatch({ type: 'SET_LOADING', loading: true });
                await axios
                  .post('/point/buy', {
                    value: parseInt(willChargePoint, 10),
                  })
                  .then(rsp => {
                    console.log(rsp);
                    alert('충전 완료');
                    setModal(false);
                    setWillChargePoint(0);
                    dispatch({ type: 'SET_LOADING', loading: false });
                  })
                  .catch(err => {
                    console.log(err.response);
                    alert('충전 실패');
                    dispatch({ type: 'SET_LOADING', loading: false });
                  });
              } else alert('금액을 입력해 주세요');
            },
          },
        ]}
      >
        <ModalContentContainer>
          <p>얼마를 충전하실 건가요?</p>
          <StyledInput
            type="text"
            name="point"
            placeholder="금액을 입력해주세요"
            onChange={e => setWillChargePoint(e.target.value)}
          />
        </ModalContentContainer>
      </Modal>
      <SpinnerScreen visible={loading} />
    </>
  );
}

export default NormalMyPage;
