import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import './index.css';

const ItemCard = ({ id, titleImg, name, price, stock }) => {
  const history = useHistory();

  return (
    <div className="itemCard" onClick={() => history.push(`/market/:${id}`)}>
      <img src={titleImg} alt="item_img" />
      <div>{name}</div>
      <div>{price}</div>
      <div>{stock}</div>
    </div>
  );
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  titleImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

export default ItemCard;
