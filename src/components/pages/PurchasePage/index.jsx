/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import commaNumber from 'comma-number';

import Layout from 'components/layout';
import { Container, Modal, SpinnerScreen } from 'components/atom';
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
  justify-content: center;
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
  width: 600px;
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

function PurchasePage() {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [addr, setAddr] = useState('');
  const [item, setItem] = useState('');
  const [modal, setModal] = useState(false);
  const loading = useSelector(state => state.shared.loading);
  const dispatch = useDispatch();

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
    };
    console.log('h9');
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
                <p>{commaNumber(count * item.price)}</p>
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
