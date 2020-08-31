import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const CardWrap = styled.div`
  background-color: #f3fbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  width: 280px;
  height: 300px;
  margin: 10px 10px;
  cursor: pointer;
  padding: 4px;
`;

const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 550;
  font-size: 14px;
  color: #00427e;
  line-height: 25px;
`;

const ItemCard = ({ id, titleImg, name, price }) => {
  const history = useHistory();

  const Img = styled.div`
    width: 272px;
    height: 292px;
    background-image: url('${titleImg}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  `;

  return (
    <CardWrap
      className="itemCard"
      onClick={() => history.push(`/market/${id}`)}
    >
      <Img />
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
