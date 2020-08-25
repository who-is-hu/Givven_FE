import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/layout';

function DonatePage () {
    const {id} = useParams();
    return <Layout>
        <span>기부페이지: {id}</span>
    </Layout>;
}

export default DonatePage;