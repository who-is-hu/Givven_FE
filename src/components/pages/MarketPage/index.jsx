import React from 'react';
import axios from 'axios';
import Layout from 'components/layout';

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
