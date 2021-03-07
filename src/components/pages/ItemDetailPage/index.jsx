/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Layout from 'components/layout';

const ShopHeader = styled.h2`
  font-family: Roboto;
  font-size: 2.25rem;
  color: #ffb800;
  letter-spacing: -0.015em;
  margin: 46px 0 0 210px;
`;

const ItemSection = styled.section`
  font-family: Montserrat;
  margin-top: 153px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemImg = styled.image`
  width: 726px;
  height: 491px;
  background-color: gray;
`;

const ItemDetailwithImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 699px;
  margin-left: 45px;
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: -0.015em;
`;

const ItemDetailList = styled.ul`
  margin-top: 40px;
  li {
    font-size: 0.875rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 53px;
    letter-spacing: -0.015em;
    margin-top: 10px;
  }
`;

const OneLineContent = styled.li`
  background-color: #e5e5e5;
`;

const ItemDetailLabel = styled.div`
  width: 332px;
`;
const ItemDetailInfo = styled.div`
  width: 340px;
`;

const InputAmount = styled.input`
  width: 340px;
`;

const PurchaseBtn = styled.button`
  background-color: #ffffff;
  width: 128px;
  height: 47px;
  border: 2px solid #009ba5;
  border-radius: 10px;
  font-size: 1.5rem;
  letter-spacing: -0.015em;
  color: #009ba5;
  margin-top: 65px;
  align-self: flex-end;
`;

const ItemContent = styled.div`
  letter-spacing: -0.015em;
  font-size: 1.5rem;
  width: 1455px;
  height: 368px;
  border: 2px solid black;
  margin-top: 151px;
  padding: 22px;
`;

function ItemDetailPage() {
  // const { id } = useParams();
  // const [item, SetItem] = useState({});
  // const history = useHistory();
  // const user = useSelector(state => state.auth.user);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get(`/item/detail/${id}`)
  //       .then(rsp => {
  //         SetItem(rsp.data);
  //       })
  //       .catch(e => {
  //         console.error(e);
  //       });
  //   };
  //   fetchData();
  // }, []);

  return (
    <Layout>
      <ShopHeader>SHOP</ShopHeader>
      <ItemSection>
        <ItemInfo>
          <ItemImg />
          <ItemDetailwithImg>
            <ItemName>상품 이름</ItemName>
            <ItemDetailList>
              <OneLineContent>
                <ItemDetailLabel>상품 한줄 설명</ItemDetailLabel>
                <ItemDetailInfo>
                  아이들이 공부할 공책입니다. 무형광 제품으로 안전합니다
                </ItemDetailInfo>
              </OneLineContent>
              <li>
                <ItemDetailLabel>금액</ItemDetailLabel>
                100포인트
              </li>
              <li>
                <ItemDetailLabel>재고</ItemDetailLabel>
                100
              </li>
              <li>
                <ItemDetailLabel>구매개수</ItemDetailLabel>
                <InputAmount />
              </li>
              <li>
                <ItemDetailLabel>총액</ItemDetailLabel>
                10000포인트
              </li>
            </ItemDetailList>
            <PurchaseBtn>구매하기</PurchaseBtn>
          </ItemDetailwithImg>
        </ItemInfo>
        <ItemContent>상품 상세정보</ItemContent>
      </ItemSection>
      {/* <img src={item.title_img} alt="item ittle" />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.stock}</div>
      <div>{item.content}</div>
      {user.type === 'charity' ? (
        <div>
          <input type="text" />
          <button
            type="submit"
            onClick={() => {
              history.push(`/purchase/${id}`);
            }}
          >
            버튼
          </button>
        </div>
      ) : null} */}
    </Layout>
  );
}

export default ItemDetailPage;
