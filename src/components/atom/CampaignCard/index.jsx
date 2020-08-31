import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const CardWrap = styled.div`
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

const CampaignCard = ({ id, titleImg, name }) => {
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
      className="CampaignCard"
      onClick={() => history.push(`/campaign/:${id}`)}
    >
      <Img />
      <div>{name}</div>
    </CardWrap>
  );
};

CampaignCard.propTypes = {
  id: PropTypes.number.isRequired,
  titleImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CampaignCard;
