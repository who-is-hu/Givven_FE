import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from 'assets/logo.PNG';

const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 500ms ease-in-out;
  max-height: ${props => (props.selected ? 0 : '90vh')};
  height: 90vh;
  z-index: 4;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #00408b;
`;

const Subs = styled.h2`
  font-size: 1.5rem;
  margin-top: 40px;
`;

const TypeCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  padding: 0 16px;
  width: 300px;
  height: 265px;
  transition: all 300ms ease-in-out;

  & > img {
    display: block;
    width: 100%;
  }

  & > p {
    font-size: 1.3rem;
    letter-spacing: -0.015em;
    color: #00408b;
  }

  :hover {
    opacity: 0.8;
  }
`;
const TypeCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1460px;
  margin-top: 64px;

  ${TypeCardBox} ~ ${TypeCardBox} {
      margin-right: 16px;
  }
`;
const TypeSelect = ({ selected, setUserType }) => {
  return (
    <Drawer selected={selected}>
      <Title>Sign up</Title>
      <Subs>어떤 목적으로 오셨나요?</Subs>
      <TypeCardWrapper>
        <TypeCardBox onClick={() => setUserType('normal')}>
          <img src={Logo} alt="normal" />
          <p>기부자</p>
        </TypeCardBox>
        <TypeCardBox onClick={() => setUserType('charity')}>
          <img src={Logo} alt="charity" />
          <p>사회단체</p>
        </TypeCardBox>
        <TypeCardBox onClick={() => setUserType('seller')}>
          <img src={Logo} alt="seller" />
          <p>판매자</p>
        </TypeCardBox>
      </TypeCardWrapper>
    </Drawer>
  );
};

TypeSelect.propTypes = {
  selected: PropTypes.bool.isRequired,
  setUserType: PropTypes.func.isRequired,
};

export default TypeSelect;
