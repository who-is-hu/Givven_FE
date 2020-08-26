import React, { useState } from 'react';
import axios from 'axios';

function SignUpPage() {
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log(typeof userType);
    console.log(userType, userName, userId, password);

    axios
      .post('/auth/join', {
        name: userName,
        email: userId,
        password: password,
        type: userType,
      })
      .then(rsp => {
        console.log(rsp);
      })
      .catch(e => {
        console.error(e);
        console.log(e.response);
      });
  };

  const onChangeName = e => {
    setUserName(e.target.value);
  };

  const onChangeId = e => {
    setUserId(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const logout = e => {
    //이미 로그인 되어있습니다 메세지를 로그아웃하기 위해 만든 버튼 추후에 삭제
    e.preventDefault();

    axios
      .get('/auth/logout')
      .then(rsp => {
        console.log(rsp);
      })
      .catch(e => {
        console.error(e);
        console.log(e.response);
      });
  };

  return (
    <>
      <form name="signUpForm" id="signUpForm" onSubmit={onSubmit}>
        <div>
          <input
            type="button"
            name="userType"
            value="normal"
            onClick={() => setUserType('normal')}
          />
          <input
            type="button"
            name="userType"
            value="charity"
            onClick={() => setUserType('charity')}
          />
          <input
            type="button"
            name="userType"
            value="seller"
            onClick={() => setUserType('seller')}
          />
        </div>

        <label htmlFor="userName">
          이름
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={onChangeName}
          />
        </label>

        <label htmlFor="userId">
          아이디
          <input type="text" name="userId" id="userId" onChange={onChangeId} />
        </label>

        <label htmlFor="password">
          패스워드
          <input
            type="password"
            name="password"
            id="password"
            onChange={onChangePassword}
          />
        </label>
      </form>
      <button type="submit" form="signUpForm">
        회원가입 완료
      </button>
      <button onClick={logout}>로그아웃</button>
    </>
  );
}

export default SignUpPage;
