import React from 'react';
import { useParams } from 'react-router-dom';

function Donate () {
    const {id} = useParams();
    return <span>기부페이지: {id}</span>
}

export default Donate;