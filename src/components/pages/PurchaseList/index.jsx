import React from 'react';
import { useParams } from 'react-router-dom';

function PurchaseList () {
    const {id} = useParams();
    return <span>구매내역: {id}</span>
}

export default PurchaseList;