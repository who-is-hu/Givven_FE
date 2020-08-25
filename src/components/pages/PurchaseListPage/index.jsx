import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout';

function PurchaseListPage () {
    const {id} = useParams();
    return <Layout>
        <span>구매내역: {id}</span>
    </Layout>
}

export default PurchaseListPage;