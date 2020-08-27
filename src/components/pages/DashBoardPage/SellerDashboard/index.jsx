import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import axios from 'axios';
import { ItemCard } from '../../../atom/index';

function SellerDashboard() {
  const [itemArr, SetItemArr] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    axios.get('/item/myItems').then(rsp => {
      SetItemArr(rsp.data.data);
      SetIsLoading(false);
      console.log(itemArr);
    });
  }, []);
  return (
    <Layout>
      <div>판매자 마이페이지</div>
      <div>
        내 아이템 리스트
        {isLoading ? (
          <div> loading </div>
        ) : (
          itemArr.map(item => (
            <ItemCard
              key={item.id}
              titleImg={item.title_img}
              name={item.name}
              price={item.price}
              stock={item.stock}
            />
          ))
        )}
      </div>
    </Layout>
  );
}

export default SellerDashboard;
