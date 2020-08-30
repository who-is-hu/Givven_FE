import React, { useState } from 'react';
import Layout from 'components/layout';

import { Modal } from 'components/atom';

const DummyPage = () => {
  const [modal, setModal] = useState(true);

  return (
    <>
      <Modal title="hi" visible={modal}>
        hi
      </Modal>
      <Layout>hi hello</Layout>
    </>
  );
};

export default DummyPage;
