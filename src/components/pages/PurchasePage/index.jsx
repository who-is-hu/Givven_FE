import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout';

function PurchasePage () {
    const {id} = useParams();
    return <Layout>
        <span>구매페이지: {id}</span>
    </Layout>
}

export default PurchasePage;