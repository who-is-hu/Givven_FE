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

  cursor: pointer;
  padding: 4px;
`;

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.div`
    width: 100%;
    height: 230px;
    background-image: url('${props => props.titleImg}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `;

const Text = styled.p`
  font-weight: 550;
  font-size: 14px;
  line-height: 25px;
`;

const CampaignCard = ({
  id,
  titleImg,
  name,
  destMoney,
  currentMoney,
  onClick,
  offOnClick,
}) => {
  const history = useHistory();

  const rate = ((currentMoney / destMoney) * 100).toFixed(0);

  return (
    <CardWrap
      className="CampaignCard"
      onClick={offOnClick ? onClick : () => history.push(`/campaign/${id}`)}
    >
      <Img titleImg={titleImg} />
      <ProgressBox>
        <progress value={rate} max={100} label={rate} />
        <b>{rate}%</b>
      </ProgressBox>

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
  offOnClick: PropTypes.bool,
  onClick: PropTypes.func,
};

CampaignCard.defaultProps = {
  offOnClick: false,
  onClick: () => {},
};

export default CampaignCard;
