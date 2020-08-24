import React from 'react';
import { useParams } from 'react-router-dom';

function Order () {
    const {id} = useParams();
    return <span>주문내역: {id}</span>
}

export default Order;