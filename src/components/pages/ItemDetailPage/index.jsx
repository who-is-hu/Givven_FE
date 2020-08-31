/* eslint-disable react-hooks/exhaustive-deps */
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
    const fetchData = async () => {
      await axios
        .get(`/item/detail/${id}`)
        .then(rsp => {
          console.log(rsp);
          SetItem(rsp.data);
        })
        .catch(e => {
          console.error(e);
        });
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <img src={item.title_img} alt="item ittle" />
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
              history.push(`/purchase/:${id}`);
            }}
          >
            버튼
          </button>
        </div>
      ) : null}
    </Layout>
  );
}

export default ItemDetailPage;
