import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import Layout from 'components/layout';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
`;

function RegistCamgaignPage() {
  const { register, handleSubmit } = useForm();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const onInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async data => {
    console.log(data.file[0]);
    const formData = new FormData();
    formData.append('img', data.file[0]);

    dispatch({ type: 'SET_LOADING', loading: true });
    await axios
      .post('/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(rsp => {
        console.log(rsp);
        dispatch({ type: 'SET_LOADING', loading: false });
      })
      .catch(error => {
        console.log(error.response);
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  };

  return (
    <Layout>
      <h1>캠페인등록 페이지</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          type="text"
          ref={register}
          placeholder="campaign name"
          onChange={e => onInputChange(e)}
        />
        <input
          name="due_day"
          type="date"
          ref={register}
          placeholder="due day"
          onChange={e => onInputChange(e)}
        />
        <input
          name="dest_money"
          type="text"
          ref={register}
          placeholder="dest money"
          onChange={e => onInputChange(e)}
        />
        <input
          name="content"
          type="textarea"
          ref={register}
          placeholder="short campaign info"
          onChange={e => onInputChange(e)}
        />
        <input
          name="file"
          type="file"
          ref={register}
          placeholder="file"
          onChange={e => onInputChange(e)}
        />
        <input name="submit" type="submit" ref={register} />
      </Form>
    </Layout>
  );
}

export default RegistCamgaignPage;
