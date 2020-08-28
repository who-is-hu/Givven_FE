import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import Layout from 'components/layout';

function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    userType: 'normal',
  });
  const dispatch = useDispatch();

  const onSubmit = async () => {
    if (form.password !== form.confirm) {
      alert('비밀번호가 다릅니다.');
      return;
    }
    dispatch({ type: 'SET_LOADING', loading: true });
    await axios
      .post('/auth/join', {
        name: form.userName,
        email: form.userId,
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
      <div>
        <div>
          <input
            type="button"
            name="userType"
            value="normal"
            onClick={e => onChangeInputs(e)}
          />
          <input
            type="button"
            name="userType"
            value="charity"
            onClick={e => onChangeInputs(e)}
          />
          <input
            type="button"
            name="userType"
            value="seller"
            onClick={e => onChangeInputs(e)}
          />
        </div>

        <label htmlFor="userName">
          이름
          <input
            type="text"
            name="name"
            id="userName"
            onChange={e => onChangeInputs(e)}
          />
        </label>

        <label htmlFor="userId">
          이메일
          <input
            type="text"
            name="email"
            id="userId"
            onChange={e => onChangeInputs(e)}
          />
        </label>

        <label htmlFor="password">
          비밀번호
          <input
            type="password"
            name="password"
            id="password"
            onChange={e => onChangeInputs(e)}
          />
        </label>

        <label htmlFor="confirm">
          비밀번호 확인
          <input
            type="password"
            name="confirm"
            id="confirm"
            onChange={e => onChangeInputs(e)}
          />
        </label>
        <button type="submit" onClick={() => onSubmit()}>
          회원가입 완료
        </button>
      </div>
    </Layout>
  );
}

export default SignUpPage;
