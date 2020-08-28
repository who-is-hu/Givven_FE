import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';

import Layout from 'components/layout';
import { SpinnerScreen } from 'components/atom';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
`;

function RegistCamgaignPage() {
  const { register, handleSubmit } = useForm();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.shared.loading);
  const onInputChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async data => {
    dispatch({ type: 'SET_LOADING', loading: true });

    const formData = new FormData();
    let url = 'uploads/default.png';
    formData.append('img', data.file[0]);
    await axios
      .post('/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(rsp => {
        console.log(rsp);
        url = rsp.data.url;
      })
      .catch(error => {
        console.log(error.response);
        alert('이미지 업로드에 실패했습니다.');
        dispatch({ type: 'SET_LOADING', loading: false });
      });
    await axios
      .post('/campaign/register', {
        name: data.name,
        dest_money: data.dest_money,
        content: data.content,
        due_day: data.due_day,
        title_img: url,
      })
      .then(rsp => {
        console.log(rsp);
        alert('캠페인 등록 완료');
        history.push('/myPage');
        dispatch({ type: 'SET_LOADING', loading: false });
      })
      .catch(error => {
        console.log(error.response);
        alert('캠페인 등록 실패');
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  };

  return (
    <>
      <SpinnerScreen visible={loading} />
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
    </>
  );
}

export default RegistCamgaignPage;
