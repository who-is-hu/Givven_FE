import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import axios from 'axios';
import { ItemCard, OrderCard } from '../../../atom/index';

function SellerDashboard() {
  const [itemArr, SetItemArr] = useState([]);
  const [isItemArrLoading, SetIsItemArrLoading] = useState(true);
  const [orderArr, SetOrderArr] = useState([]);
  const [isOrderArrLoading, SetIsOrderArrLoading] = useState(true);

  useEffect(() => {
    axios.get('/item/myItems').then(rsp => {
      SetItemArr(rsp.data.data);
      SetIsItemArrLoading(false);
    });
    axios.get('/tradeLog/myOrders').then(rsp => {
      SetOrderArr(rsp.data.data);
      SetIsOrderArrLoading(false);
    });
  }, []);

  return (
    <Layout>
      <div>판매자 마이페이지</div>
      <div>
        내 아이템 리스트
        {isItemArrLoading ? (
          <div> loading </div>
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
      </div>
      <div>
        내 주문 목록 리스트
        {isOrderArrLoading ? (
          <div> loading </div>
        ) : (
          orderArr.map(order => (
            <OrderCard
              key={order.id}
              id={order.id}
              name={order.item.name}
              count={order.orderCount}
            />
          ))
        )}
      </div>
    </Layout>
  );
}

export default SellerDashboard;
