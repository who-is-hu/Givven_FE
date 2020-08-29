import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';

import Layout from 'components/layout';
import { SpinnerScreen } from 'components/atom';
import defaultImg from 'assets/logo.PNG';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 500px;
`;

const ImgWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

function RegistItemPage() {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.shared.loading);

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
      .post('/item/register', {
        name: data.name,
        price: parseInt(data.price, 10),
        content: data.content,
        stock: parseInt(data.stock, 10),
        title_img: url,
      })
      .then(rsp => {
        console.log(rsp);
        alert('상품 등록 완료');
        history.push('/dashboard');
        dispatch({ type: 'SET_LOADING', loading: false });
      })
      .catch(error => {
        console.log(error.response);
        alert('상품 등록 실패');
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  };

  return (
    <>
      <SpinnerScreen visible={loading} />
      <Layout>
        <h1>아이템 등록 페이지</h1>
        <ImgWrapper>
          <img src={file || defaultImg} alt="thumb" />
        </ImgWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            type="text"
            ref={register}
            placeholder="item name"
          />
          <input name="price" type="text" ref={register} placeholder="price" />
          <input name="stock" type="text" ref={register} placeholder="stock" />
          <input
            name="content"
            type="textarea"
            ref={register}
            placeholder="short item info"
          />
          <input
            name="file"
            type="file"
            ref={register}
            placeholder="file"
            onChange={e => {
              setFile(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <input name="submit" type="submit" ref={register} />
        </Form>
      </Layout>
    </>
  );
}

export default RegistItemPage;
