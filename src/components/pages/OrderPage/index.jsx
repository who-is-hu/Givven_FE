import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout';

function OrderPage () {
    const {id} = useParams();
    return <Layout>
        <span>주문내역: {id}</span>
    </Layout>;
}

export default OrderPage;