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

const CampaignCard = ({ id, titleImg, name, destMoney, currentMoney }) => {
  const history = useHistory();

  const Img = styled.div`
    width: 272px;
    height: 292px;
    background-image: url('${titleImg}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `;

  const Text = styled.p`
    font-weight: 550;
    font-size: 14px;
    line-height: 25px;
  `;

  const rate = ((currentMoney / destMoney) * 100).toFixed(0);

  return (
    <CardWrap
      className="CampaignCard"
      onClick={() => history.push(`/campaign/${id}`)}
    >
      <Img />
      <div>
        <progress value={rate} max={100} label={rate} />
        <b> {rate}%</b>
      </div>

      <Text>{name}</Text>
    </CardWrap>
  );
};

CampaignCard.propTypes = {
  id: PropTypes.number.isRequired,
  titleImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  destMoney: PropTypes.number.isRequired,
  currentMoney: PropTypes.number.isRequired,
};

export default CampaignCard;
