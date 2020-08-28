import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import axios from 'axios';
import { ItemCard } from 'components/atom';

function MarketPage() {
  const [itemArr, SetItemArr] = useState([]);

  useEffect(() => {
    axios.get('/item/items').then(rsp => {
      SetItemArr(rsp.data.data);
    });
  }, []);

  return (
    <Layout>
      <div>상점</div>
      {itemArr.map(item => (
        <ItemCard
          key={item.id}
          id={item.id}
          titleImg={item.title_img}
          name={item.name}
          price={item.price}
          stock={item.stock}
        />
      ))}
    </Layout>
  );
}

export default MarketPage;
