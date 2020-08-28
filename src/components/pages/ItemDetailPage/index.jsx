import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Layout from 'components/layout';

function ItemDetailPage() {
  const { id } = useParams();
  const [item, SetItem] = useState({});
  const history = useHistory();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    axios
      .get(`/item/detail/${id}`)
      .then(rsp => {
        SetItem(rsp.data.data);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  const PurchaseButton = () => {
    if (user.type === 'charity') {
      return (
        <div>
          <input type="text" />
          <button
            type="submit"
            onClick={() => {
              history.push(`/purchase/:${id}`);
            }}
          >
            버튼
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <Layout>
      <img src={item.title_img} alt="item ittle" />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.stock}</div>
      <div>{item.content}</div>
      {user && PurchaseButton()}
    </Layout>
  );
}

export default ItemDetailPage;
