import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import './index.css';

function OrderCard({ id, name, count }) {
  const history = useHistory();
  return (
    <div className="orderCard" onClick={() => history.push(`/order/:${id}`)}>
      <div>{name}</div>
      <div>{count}</div>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default OrderCard;
