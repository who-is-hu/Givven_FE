import React from 'react';
import PropTypes from 'prop-types';

function ItemCard({ titleImg, name, price, stock }) {
  return (
    <div>
      <h1>내 아이템</h1>
      <img src={titleImg} alt="item_img" />
      <div>{name}</div>
      <div>{price}</div>
      <div>{stock}</div>
    </div>
  );
}

ItemCard.propTypes = {
  titleImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

export default ItemCard;
