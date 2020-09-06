import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import axios from 'axios';
import Layout from 'components/layout';
import TypeSelect from './TypeSelect';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  padding: 32px 32px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #005ea3;
  align-self: flex-start;
  margin-bottom: 20px;
`;

const Subs = styled.p`
  font-size: 1.1rem;
  color: #00408b;
  align-self: flex-start;
  margin-bottom: 80px;

  & > span {
    color: #009ba5;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 52px;
  background-color: #fff;
  border: 1px solid #01656b;
  border-radius: 15px;
  padding: 12px 20px;

  ::placeholder {
    font-size: 1.0625rem;
    letter-spacing: -0.015em;
  }

  & ~ & {
    margin-top: 20px;
  }

  :focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  background: #00408b;
  border: none;
  transition: all 300ms ease;

  :focus {
    outline: none;
  }

  :hover {
    opacity: 0.8;
  }
`;

const GoBackButton = styled(StyledButton)`
  background: #999999;
`;

const convert = {
  normal: '기부자',
  charity: '사회단체',
  seller: '판매자',
};

function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    userType: 'normal',
  });
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    if (form.password !== form.confirm) {
      alert('비밀번호가 다릅니다.');
      return;
    }
    dispatch({ type: 'SET_LOADING', loading: true });
    await axios
      .post('/auth/join', {
        name: form.name,
        email: form.email,
        password: form.password,
        type: form.userType,
      })
      .then(rsp => {
        console.log(rsp);
        dispatch({ type: 'SET_LOADING', loading: false });
      })
      .catch(e => {
        console.error(e);
        console.log(e.response);
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  };

  const onChangeInputs = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Container>
        {!selected ? (
          <TypeSelect
            setUserType={type => {
              setForm({
                ...form,
                userType: type,
              });
              setSelected(true);
            }}
          />
        ) : (
          <Form>
            <Title>Sign Up</Title>
            <Subs>
              <span>{convert[form.userType]}</span> 계정을 생성합니다.
            </Subs>
            <StyledInput
              type="text"
              name="email"
              id="userId"
              onChange={e => onChangeInputs(e)}
              placeholder="이메일"
            />
            <StyledInput
              type="text"
              name="name"
              id="userName"
              onChange={e => onChangeInputs(e)}
              placeholder="이름"
            />

            <StyledInput
              type="password"
              name="password"
              id="password"
              onChange={e => onChangeInputs(e)}
              placeholder="비밀번호"
            />
            <StyledInput
              type="password"
              name="confirm"
              id="confirm"
              onChange={e => onChangeInputs(e)}
              placeholder="비밀번호 확인"
            />
            <StyledButton type="submit" onClick={() => onSubmit()}>
              Sign Up
            </StyledButton>
            <GoBackButton type="button" onClick={() => setSelected(false)}>
              뒤로가기
            </GoBackButton>
          </Form>
        )}
      </Container>
    </Layout>
  );
}

export default SignUpPage;
