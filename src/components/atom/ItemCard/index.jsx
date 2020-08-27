import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const CardWrap = styled.div`
  border: 1px solid #ffa734ea;
  width: 100px;
  margin: 10px 0px;
`;

const ItemCard = ({ id, titleImg, name, price, stock }) => {
  const history = useHistory();

  return (
    <CardWrap
      className="itemCard"
      onClick={() => history.push(`/market/:${id}`)}
    >
      <img src={titleImg} alt="item_img" />
      <div>{name}</div>
      <div>{price}</div>
      <div>{stock}</div>
    </CardWrap>
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
