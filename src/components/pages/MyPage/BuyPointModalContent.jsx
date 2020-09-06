import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;

  & > p {
    font-size: 1rem;
  }
  & > h3 {
    font-size: 1rem;
    line-height: 2.5;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 44px;
  width: 100%;
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  width: 70%;
  height: 40px;
  font-size: 1rem;
  font-weight: 400;

  ::placeholder {
    font-size: 1rem;
    color: grey;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 34px;
  border: 1px solid grey;
  transition: all 300ms ease;
  margin-right: 4px;
  cursor: pointer;
  :focus {
    outline: none;
  }

  :hover {
    border: 2px solid #009ba5;
    color: #00408b;
  }
`;

const BuyPointModalContent = ({ point, setPoint }) => {
  return (
    <Container>
      <Row>
        <h3>충전 할 금액</h3>
        <StyledInput
          name="point"
          placeholder="금액을 입력해주세요"
          onChange={e => setPoint(e.target.value)}
          value={point}
        />
      </Row>
      <Row>
        <Button onClick={() => setPoint(point + 1000)}>+1천원</Button>
        <Button onClick={() => setPoint(point + 5000)}>+5천원</Button>
        <Button onClick={() => setPoint(point + 10000)}>+1만원</Button>
        <Button onClick={() => setPoint(point + 50000)}>+5만원</Button>
        <Button onClick={() => setPoint(point + 100000)}>+10만원</Button>
      </Row>
    </Container>
  );
};

BuyPointModalContent.propTypes = {
  point: PropTypes.number.isRequired,
  setPoint: PropTypes.func.isRequired,
};

export default BuyPointModalContent;
