import React, { useState } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import { HeaderNav } from 'components/atom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${props => props.padding};
`;
const Layout = ({ padding, children }) => {
  const [current, setCurrent] = useState(0);

  return (
    <Wrapper>
      <HeaderNav current={current} setCurrent={setCurrent} />
      <Content padding={padding}>{children}</Content>
    </Wrapper>
  );
};

Layout.propTypes = {
  padding: PropTypes.string,
};

Layout.defaultProps = {
  padding: '0px',
};

export default Layout;
