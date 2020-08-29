/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dimmer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  width: 100%;
  max-width: 580px;
  max-height: 516px;
  background-color: #ffffff;
  border-radius: 7px;
  overflow: hidden;
  padding-bottom: 28px;
`;

const ModalHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccd0d4;
  padding: 28px 40px 16px;
  @media only screen and (max-width: 992px) {
    padding: 28px 16px 16px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #232527;
  line-height: 1;
  font-stretch: normal;
`;

const SubTitle = styled.p`
  font-size: 0.9375rem;
  color: #8c9094;
  line-height: 1;
  margin: 0px 0px 0px 8px;
  @media only screen and (max-width: 992px) {
    margin: 8px 0px 0px 0px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 28px 0px 40px;
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 38px;
  max-width: none;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  background-color: ${props => (props.filled ? '#ffc847' : '#edf0f3')};
  color: ${props => (props.filled ? '#232527' : '#8c9094')};
  font-size: 0.875rem;
  cursor: pointer;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 40px;
  @media only screen and (max-width: 992px) {
    padding: 0 16px;
  }
`;
const Modal = ({
  title,
  description,
  visible,
  children,
  buttons,
  onCloseClick,
}) => {
  return (
    <Dimmer visible={visible}>
      <ModalWrapper>
        {title && (
          <ModalHeader>
            <TitleWrapper>
              <Title>{title}</Title>
              <SubTitle>{description}</SubTitle>
            </TitleWrapper>
            <IconWrapper onClick={onCloseClick}>close</IconWrapper>
          </ModalHeader>
        )}
        <Contents>{children}</Contents>
        <Buttons>
          {buttons.map(button => (
            <StyledButton filled key={button.id} {...button}>
              {button.label}
            </StyledButton>
          ))}
        </Buttons>
      </ModalWrapper>
    </Dimmer>
  );
};

Modal.propTypes = {
  onCloseClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  visible: PropTypes.bool,
  buttons: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

Modal.defaultProps = {
  onCloseClick: () => console.log('close button cilcked'),
  visible: true,
  title: '',
  description: '',
  buttons: [
    {
      id: 'button1',
      label: 'Button1',
      filled: true,
      onClick: () => console.log('Button1 has been clicked!'),
    },
    {
      id: 'button2',
      label: 'Button2',
      filled: false,
      onClick: () => console.log('Button2 has been clicked!'),
    },
  ],
};

export default Modal;
