import React from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Layout from 'components/layout';

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async data => {
    console.log(data);
    dispatch({ type: 'SET_LOADING', loading: true });
    await axios
      .post('/auth/login', {
        email: data.email,
        password: data.password,
      })
      .then(rsp => {
        console.log(rsp);
        dispatch({ type: 'SET_USER', user: rsp.data.user });
      })
      .catch(e => {
        alert(e.response.data.message);
      });
    dispatch({ type: 'SET_LOADING', loading: false });
  };

  const onLogout = () => {
    axios
      .get('auth/logout')
      .then(rsp => {
        console.log(rsp);
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <Layout>
      로그인페이지
      <StyledFrom onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register}
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
        />
        <input
          ref={register}
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <button type="submit">submit</button>
      </StyledFrom>
      <button type="button" onClick={() => onLogout()}>
        ho
      </button>
    </Layout>
  );
};

export default SignInPage;
