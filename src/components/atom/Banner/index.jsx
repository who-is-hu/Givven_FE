import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 540px;
  letter-spacing: -0.015em;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;
  background-position: center center;
`;

const BannerTitle = styled.div`
  font-family: Roboto;
  position: absolute;
  top: 82px;
  left: 285px;
  font-size: 36px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BannerOption = styled.div`
  position: absolute;
  right: 89px;
  bottom: 112px;
  font-size: 18px;
`;
const BannerBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 89px;
  bottom: 38px;
  width: 238px;
  height: 52px;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 34px;
  color: #ff7a00;
`;

const Banner = ({ title, option, backgroundImg }) => {
    return (
      <StyledBanner backgroundImg={backgroundImg}>
        <BannerTitle>{title}</BannerTitle>
        <BannerOption>{option}</BannerOption>
        <BannerBtn>지금 알아보기</BannerBtn>
      </StyledBanner>
    );
  };
  
  Banner.propTypes = {
    title: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    backgroundImg: PropTypes.string.isRequired,
  };

  export default Banner;
  