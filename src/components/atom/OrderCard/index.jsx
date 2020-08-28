import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const CardWrap = styled.div`
  border: 1px solid #ffa734ea;
  width: 100px;
  margin: 10px 0px;
  cursor: pointer;
`;

function OrderCard({ id, name, count }) {
  const history = useHistory();
  return (
    <CardWrap
      className="orderCard"
      onClick={() => history.push(`/order/:${id}`)}
    >
      <div>{name}</div>
      <div>{count}</div>
    </CardWrap>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default OrderCard;
