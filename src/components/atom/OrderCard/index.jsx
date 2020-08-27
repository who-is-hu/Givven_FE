import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ name, count }) {
  return (
    <div>
      <div>{name}</div>
      <div>{count}</div>
    </div>
  );
}

OrderCard.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default OrderCard;
