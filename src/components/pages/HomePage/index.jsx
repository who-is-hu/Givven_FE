import React from 'react';
import Layout from 'components/layout';
import styled from 'styled-components';
import MAIN from 'assets/main.png';
import INTROIMGONE from 'assets/landing_sub_1.jpg';
import INTROIMGTWO from 'assets/landing_sub_2.png';
import NORMAL from 'assets/normal.png';
import SELLER from 'assets/seller.png';
import CHARITY from 'assets/charity.png';
import { useHistory } from 'react-router';
import { Text } from 'components/atom';

const TypeText = styled(Text)`
  line-height: 80px;
  color: #00427e;
`;

const IntroText = styled(Text)`
  width: 100%;
  height: 120px;
  color: #01656b;
  line-height: 49px;
`;

const RequestText = styled(IntroText)`
  color: #00427e;
`;

const MainText = styled(RequestText)`
  height: 70px;
  text-align: left;
`;

const Container = styled.div`
  width: 100%;
  min-width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainImg = styled.div`
  width: 100%;
  height: 600px;
  background-image: url('${MAIN}');
  background-size: 100% 600px;
  padding-top: 350px;
  padding-left: 100px;
`;

const Introduction = styled.div`
  margin-top: 240px;
  width: 1600px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: felx;
  justify-content: space-between;
  align-items: center;
`;

const IntroImg = styled.div`
  width: 900px;
  height: 380px;
  background-image: url('${props => props.url}');
  background-size: 950px 380px;
`;

const IntroductionText = styled.p`
  padding-left: 40px;
  width: 600px;
  font-size: 14px;
  line-height: 49px;
  text-align: left;
  color: ${props => props.color};
  order: ${props => props.order}
`;

const SelectType = styled.div`
  margin-top: 240px;
  margin-bottom: 300px;
  width: 1200px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TypeImg = styled.div`
  width:300px;
  height:300px;
  background-image: url('${props => props.url}');
  background-size: 300px 300px;
`;

const GoSignUp = styled.button`
  width: 400px;
  margin: 50px 0px;
  border: 0;
  line-height: 30px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  background: #2347a3;
  border: none;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.8;
  }
`;

function HomePage() {
  const history = useHistory();

  const introductions = [
    {
      name: "FirstIntroduction",
      mainIntroText: "기부금의 흐름이 투명하게 공개됩니다.",
      subIntroText: `기부금이 어디에 쓰이는지 궁금하신가요?
      기부금이 올바른데 쓰이지 못하고 악용 될까바 기부가 겁나시나요?
      '기쁜'은 투명하고 신뢰성 있는 기부 환경을 지향합니다.
      기부한 순간부터 기부금의 흐름을 알 수 있을거에요.`,
      url: INTROIMGONE,
      order: 2,
      color: "#009ba5"
    },
    {
      name: "SecondIntroduction",
      mainIntroText: "당신의 예쁜 마음그대로 전달하겠습니다.",
      subIntroText: `블록체인 기반의 분산원장을 사용하여 모든 거래 내역을 저장하기 때문에
      위조나 변조가 불가능하여 투명하고 신뢰성 있는 환경을 만들 수 있습니다.
      ‘기쁜’은 기부자와 사회단체 간의 관계에 판매자를 추가하여,
      사회단체가 어떤 물품을 어느 수급자에게 어떻게 전달했는지도 투명하게 저장합니다!`,
      url: INTROIMGTWO,
      order: 1,
      color: "#006cd0"
    }
  ]
  const types = [
    {
      name: "Normal",
      url: NORMAL
    },
    {
      name: "Charity",
      url: CHARITY
    },
    {
      name: "Seller",
      url: SELLER
    }
  ]

  return (
    <Layout>
      <Container className="Container">
        <MainImg className="mainImg">
          <MainText>나눔을 통해</MainText>
          <MainText>당신과 나를 연결합니다.</MainText>
        </MainImg>
        {introductions.map((intro, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Introduction className={intro.name} key={i}>
              <IntroContainer>
                <IntroImg url={intro.url} />
                <IntroductionText order={intro.order} color={intro.color}>
                  {intro.subIntroText}
                </IntroductionText>
              </IntroContainer>
            </Introduction>
        )})}
        <SelectType className="SelectType">
          <RequestText>시작해볼까요??</RequestText>
          <TypeContainer>
            {types.map((type, i) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <TypeImage key={i}>
                  <TypeImg url={type.url} />
                  <TypeText>{type.name}</TypeText>
                </TypeImage>
              )
            })}
          </TypeContainer>
          <GoSignUp onClick={() => history.push('/signUp')}>
            함께하러가기
          </GoSignUp>
        </SelectType>
      </Container>
    </Layout>
  );
}

export default HomePage;
