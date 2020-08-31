import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import axios from 'axios';
import { ItemCard } from 'components/atom';

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
      <div>생젝</div>
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
