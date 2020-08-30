import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Layout from 'components/layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  padding: 32px 32px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #00408b;
  align-self: flex-start;
  margin-bottom: 80px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
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

const SignupButton = styled(StyledButton)`
  background: #005ea3;
`;

const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async data => {
    console.log(data);
    dispatch({ type: 'SET_LOADING', loading: true });
    await axios
      .post('/auth/login', {
        email: data.email,
        password: data.password,
      })
      .then(rsp => {
        // console.log(rsp);
        dispatch({ type: 'SET_USER', user: rsp.data.user });
        history.push('/main');
        dispatch({ type: 'SET_LOADING', loading: false });
      })
      .catch(e => {
        alert(e.response.data.message);
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  };

  return (
    <Layout>
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Login</Title>
          <StyledInput
            ref={register}
            type="text"
            name="email"
            placeholder="이메일"
          />
          <StyledInput
            ref={register}
            type="password"
            name="password"
            placeholder="비밀번호"
          />
          <StyledButton type="submit">로그인</StyledButton>
          <SignupButton type="button" onClick={() => history.push('/signUp')}>
            회원가입
          </SignupButton>
        </StyledForm>
      </Container>
    </Layout>
  );
};

export default SignInPage;
