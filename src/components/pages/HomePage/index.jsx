import React from 'react';
import Layout from 'components/layout';

function HomePage() {
  return (
    <Layout>
      <div>랜딩페이지</div>
      <button type="submit" onClick={logout}>
        로그아웃
      </button>
    </Layout>
  );
}

export default HomePage;
