import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  width: 206px;
  min-width: 206px;
  height: 260px;
  min-height: 260px;
  margin: 10px 10px;
  cursor: pointer;
  padding: 4px;
`;

const Text = styled.p`
  font-weight: 550;
  font-size: 14px;
  color: #00427e;
  line-height: 25px;
`;

const Img = styled.div`
    width: 100%;
    height: 230px;
    background-image: url('${props => props.titleImg}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  `;

const ItemCard = ({ id, titleImg, name, price }) => {
  const history = useHistory();

  return (
    <CardWrap
      className="itemCard"
      onClick={() => history.push(`/market/${id}`)}
    >
      <Img titleImg={titleImg} />
      <Text>상품명 : {name}</Text>
      <Text>가격 : {price}</Text>
    </CardWrap>
  );
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  titleImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
