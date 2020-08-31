import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Layout from 'components/layout';
import axios from 'axios';
import { ItemCard, OrderCard } from 'components/atom';

function SellerDashboard() {
  const [itemArr, SetItemArr] = useState([]);
  const [isItemArrLoading, SetIsItemArrLoading] = useState(true);
  const [orderArr, SetOrderArr] = useState([]);
  const [isOrderArrLoading, SetIsOrderArrLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('/item/myItems')
        .then(rsp => {
          SetItemArr(rsp.data);
          SetIsItemArrLoading(false);
        })
        .catch(err => {
          console.log(err.response);
        });
      await axios
        .get('/tradeLog/myOrders')
        .then(rsp => {
          SetOrderArr(rsp.data);
          SetIsOrderArrLoading(false);
        })
        .catch(err => {
          console.log(err.response);
        });
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div>판매자 마이페이지</div>
      <div>
        <button type="button" onClick={() => history.push('/registItem')}>
          상품등록
        </button>
        <button type="button">환전</button>
      </div>
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
