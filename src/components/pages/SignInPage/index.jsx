import React from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import axios from 'axios';

import Layout from 'components/layout';

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  console.log();
  const onSubmit = data => {
    console.log(data);

    axios
      .post(
        'http://ec2-54-180-160-14.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true },
      )
      .then(rsp => {
        console.log(rsp);
      })
      .catch(e => {
        console.error(e);
      });
  };

  const onLogout = () => {
    axios
      .get(
        'http://ec2-54-180-160-14.ap-northeast-2.compute.amazonaws.com:8080/auth/logout',
        { withCredentials: true },
      )
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