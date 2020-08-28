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

const CampaignCard = ({ id, titleImg, name }) => {
  const history = useHistory();

  return (
    <CardWrap
      className="CampaignCard"
      onClick={() => history.push(`/campaign/:${id}`)}
    >
      <img src={titleImg} alt="campaign_img" />
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
