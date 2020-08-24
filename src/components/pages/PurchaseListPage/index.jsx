import React from 'react';
import { useParams } from 'react-router-dom';

function PurchaseListPage () {
    const {id} = useParams();
    return <span>구매내역: {id}</span>
}

export default PurchaseListPage;