import React from 'react';
import { useParams } from 'react-router-dom';

function DonatePage () {
    const {id} = useParams();
    return <span>기부페이지: {id}</span>
}

export default DonatePage;