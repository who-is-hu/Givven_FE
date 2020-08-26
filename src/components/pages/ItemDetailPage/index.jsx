import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Layout from 'components/layout';

function ItemDetailPage() {
  const { id } = useParams();
  return (
    <Layout>
      <div>상점 디테일 : {id}</div>
    </Layout>
  );
}

export default ItemDetailPage;
