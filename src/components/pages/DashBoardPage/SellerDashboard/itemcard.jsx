import React from 'react';

function ItemCard({ title_img, name, price, stock }) {
  return (
    <div>
      <h1>내 아이템</h1>
      <img src={title_img} />
      <div>{name}</div>
      <div>{price}</div>
      <div>{stock}</div>
    </div>
  );
}

export default ItemCard;
