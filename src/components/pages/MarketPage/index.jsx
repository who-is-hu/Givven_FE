import React from 'react';
import Layout from 'components/layout';
import axios from 'axios';

const CallAllItems = async data => {
  await axios
    .get('/item/items')
    .then(rsp => {
      console.log(rsp);
    })
    .catch(e => console.error(e));
};

function MarketPage() {
  CallAllItems();
  return (
    <Layout>
      <div>생젝</div>
    </Layout>
  );
}

export default MarketPage;
