import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Layout from 'components/layout';
import { ItemCard, Container } from 'components/atom';

const Title = styled.h1`
  display: block;
  font-family: Roboto;
  color: #ffb800;
  font-size: 2.25rem;
  margin-top: 40px;
  align-self: flex-start;
`;

const ItemList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 32px;
  overflow: hidden;
`;
const NoneNotice = styled.div`
  margin: auto;
  font-size: 1.2rem;
  color: grey;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  display: flex;
  align-self: flex-start;
  margin-top: 120px;
`;

function MarketPage() {
  const [itemArr, SetItemArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/item/items')
        .then(rsp => {
          SetItemArr(rsp.data);
        })
        .catch(err => {
          console.log(err.response);
        });
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Container>
        <Title>SHOP</Title>
        <SectionTitle>판매중인 상품</SectionTitle>
        <ItemList>
          {itemArr.length === 0 ? (
            <NoneNotice />
          ) : (
            itemArr.map(item => (
              <ItemCard
                key={item.id}
                id={item.id}
                titleImg={item.title_img}
                name={item.name}
                price={item.price}
                stock={item.stock}
              />
            ))
          )}
        </ItemList>
      </Container>
    </Layout>
  );
}

export default MarketPage;
