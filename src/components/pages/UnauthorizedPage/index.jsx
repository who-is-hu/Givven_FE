import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import Logo from 'assets/logo.PNG';

const Container = styled.div`
  width: 100%;
  min-width: 1920px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 800px;
  padding: 75px;
  border: 4px solid #203864;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubText= styled.p`
  500px;
  font-size: 50px;
`
const Text = styled.p`
  width: 300px;
  font-size: 150px;
  line-height: 220px;
`
const ImgContainer = styled.div`
  position: relative;
  margin-top: -70px;
  margin-bottom: 30px;
  width: 300px;
  height: 100px;
  border-bottom: 4px solid #203864;
  display: flex;
  justify-content: center;
`;
const Img = styled.div`
  width: 180px;
  height: 100px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  
`;

function UnauthorizedPage () {
  return (
    <Layout>
      <Container>
        <SubContainer>
          <ImgContainer>
            <Img />
          </ImgContainer>
          <SubText>Error!</SubText>
          <Text>401</Text>
          <SubText>Authorization required!</SubText>
        </SubContainer>
      </Container>
    </Layout>
  )
}

export default UnauthorizedPage;