import React from 'react';
import { useParams } from 'react-router-dom';

function Purchase () {
    const {id} = useParams();
    return <span>구매페이지: {id}</span>
}

export default Purchase;