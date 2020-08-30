import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import MAIN from 'assets/main.png';
import SUBONE from 'assets/landing_sub_1.jpg';
import SUBTWO from 'assets/landing_sub_2.png';
import NORMAL from 'assets/normal.png';
import SELLER from 'assets/seller.png';
import CHARITY from 'assets/charity.png';

const Container = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const MainImg = styled.div`
  width: 1600px;
  height: 600px;
  background-image: url('${MAIN}');
  background-size: 1600px 600px;
  padding-top: 350px;
  padding-left: 100px;
`;

const MainText = styled.h1`
  color: #00427e;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 53px;
`;

const Introduction = styled.div`
  margin-top: 240px;
  width: 1600px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: felx;
  justify-content: space-between;
  align-items: center;
`;

const SubTextOne = styled.p`
  width: 100%;
  height: 120px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #01656b;
  line-height: 49px;
  text-align: center;
`;

const SubImgOne = styled.div`
  width: 900px;
  height: 380px;
  background-image: url('${SUBONE}');
  background-size: 900px 380px;
`;

const InstroductionOne = styled.p`
  padding-left: 40px;
  width: 600px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 49px;
  text-align: left;
  color: #009ba5;
`;

const SubTextTwo = styled.p`
  width: 100%;
  height: 120px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #005ea3;
  line-height: 49px;
  text-align: center;
`;

const SubImgTwo = styled.div`
  width: 1000px;
  height: 380px;
  background-color: yellow;
  background-image: url('${SUBTWO}');
  background-size: 1000px 380px;
`;

const InstroductionTwo = styled.p`
  padding-right: 40px;
  width: 600px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 49px;
  text-align: right;
  color: #006cd0;
`;

const SelectType = styled.div`
  margin-top: 240px;
  width: 1200px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTextThree = styled.p`
  height: 90px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #00427e;
`;

const TypeContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TypeImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  wrap: wrap;
`;

const NormalImg = styled.div`
  width:300px;
  height:300px;
  background-image: url('${NORMAL}');
  background-size: 300px 300px;
`;

const CharityImg = styled.div`
  width:300px;
  height:300px;
  background-image: url('${CHARITY}');
  background-size: 300px 300px;
`;

const SellerImg = styled.div`
  width:300px;
  height:300px;
  background-image: url('${SELLER}');
  background-size: 300px 300px;
`;

const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 80px;
  color: #00427e;
`;

function HomePage() {
  return (
    <Layout>
      <Container className="Container">
        <MainImg className="mainImg">
          <MainText>나눔을 통해</MainText>
          <MainText>당신과 나를 연결합니다.</MainText>
        </MainImg>
        <Introduction className="FirstIntroduction">
          <SubTextOne>기부금의 흐름이 투명하게 공개됩니다.</SubTextOne>
          <SubContainer>
            <SubImgOne />
            <InstroductionOne>
              기부금이 어디에 쓰이는지 궁금하신가요?
              <br />
              기부금이 올바른데 쓰이지 못하고 악용 될까봐 기부가 겁나시나요?
              <br />
              ‘기쁜’은 투명하고 신뢰성 있는 기부환경을 지향합니다.
              <br />
              기부한 순간부터 기부금의 흐름을 알 수 있을거에요.
            </InstroductionOne>
          </SubContainer>
        </Introduction>
        <Introduction ClassName="SecondIntroduction">
          <SubTextTwo>당신의 예쁜 마음그대로 전달하겠습니다.</SubTextTwo>
          <SubContainer>
            <InstroductionTwo>
              블록체인 기반의 분산원장을 사용하여 모든 거래 내역을 저장하기
              때문에
              <br />
              위조나 변조가 불가능하여 투명하고 신뢰성 있는 환경을 만들 수
              있습니다.
              <br />
              ‘기쁜’은 기부자와 사회단체 간의 관계에 판매자를 추가하여,
              <br />
              사회단체가 어떤 물품을 어느 수급자에게 어떻게 전달했는지도
              투명하게 저장합니다!
            </InstroductionTwo>
            <SubImgTwo />
          </SubContainer>
        </Introduction>
        <SelectType className="SelectType">
          <SubTextThree>시작해볼까요??</SubTextThree>
          <TypeContainer>
            <TypeImage>
              <NormalImg />
              <Text>Private</Text>
            </TypeImage>
            <TypeImage>
              <CharityImg />
              <Text>Charity</Text>
            </TypeImage>
            <TypeImage>
              <SellerImg />
              <Text>Seller</Text>
            </TypeImage>
          </TypeContainer>
        </SelectType>
      </Container>
    </Layout>
  );
}

export default HomePage;
