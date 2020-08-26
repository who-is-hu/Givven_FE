import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Layout from 'components/layout';

function ItemDetailPage() {
  const { id } = useParams();

  axios.get(
        `/item/detail/${id}`,
      )
      .then(rsp => {
        console.log(rsp);
      })
      .catch(e => {
        console.error(e);
      });


  return <div>상점 디테일 : {id}</div>;
}

export default ItemDetailPage;
