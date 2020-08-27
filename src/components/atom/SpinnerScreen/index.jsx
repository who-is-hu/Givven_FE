import React from 'react';
import styled from 'styled-components';
import MDSpinner from 'react-md-spinner';
import PropType from 'prop-types';

const Wrapper = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
`;

const SpinnerScreen = ({ visible }) => {
  return (
    <Wrapper visible={visible}>
      <MDSpinner />
    </Wrapper>
  );
};

SpinnerScreen.propTypes = {
  visible: PropType.bool.isRequired,
};
export default SpinnerScreen;
