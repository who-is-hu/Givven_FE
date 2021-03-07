import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import Layout from 'components/layout';
import { SpinnerScreen } from 'components/atom';
import defaultImg from 'assets/logo.PNG';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 120px 230px;
`;

const MainText = styled.h1`
  display: block;
  font-family: Roboto;
  width: 100%;
  height: 42p;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.015em;
  color: #ffb800;
  margin-bottom: 120px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const FormSubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 60px;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  widht: 800px;
  height: 580px;
  margin-right: 70px;
`;

const ImgWrapper = styled.div`
  width: 800px;
  height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Btn = styled.input`
  position: relative;
  opacity: 0;
  width: 190px;
  height: 30px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #00427e;
  cursor: pointer;
`;

const FakeObject = styled.div`
  width: 190px;
  height: 30px;
  margin-top: -30px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #00427e;
  border: 0.5px solid #00427e;
`;

const SubContainer = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 600px;
  height: 40px;
  margin-bottom: 60px;
`;
const Text = styled.span`
  display: inline-block;
  width: 145px;
  height: 30px;
  margin-right: 50px;
  font-size: 20px;
`;
const Input = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #18a0fb;
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 450px;
  font-size: 20px;
  border: 1px solid #01656b;
  border-radius: 15px;
  padding: 15px;
  :focus {
    outline: none;
  }
  margin-bottom: 30px;
`;

const FakeObjectTwo = styled(FakeObject)`
  display: flex;
  margin-top: -20px;
  height: 20px;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

const MyDatePicker = styled(DatePicker)`
  width: 400px;
  height: 50px;
  border: 1px solid #18a0fb;
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

function RegistCamgaignPage() {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.shared.loading);
  const [date, SetDate] = useState(new Date());

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
        console.log(data);
        alert('캠페인 등록 실패');
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  };

  return (
    <>
      <SpinnerScreen visible={loading} />
      <Layout>
        <Container>
          <MainText>캠페인등록 페이지</MainText>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormSubContainer>
              <ImgContainer>
                <ImgWrapper>
                  <Img src={file || defaultImg} alt="thumb" />
                </ImgWrapper>
                <Btn
                  name="file"
                  type="file"
                  ref={register}
                  placeholder="file"
                  onChange={e => {
                    console.log(e.target.files);
                    setFile(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <FakeObject>포스터 업로드 하기</FakeObject>
              </ImgContainer>
              <SubContainer>
                <InputContainer>
                  <Text>캠페인 이름</Text>
                  <Input
                    name="name"
                    type="text"
                    ref={register}
                    placeholder="campaign name"
                  />
                </InputContainer>
                <InputContainer>
                  <Text>목표 설정 금액</Text>
                  <Input
                    name="dest_money"
                    type="text"
                    ref={register}
                    placeholder="dest money"
                  />
                </InputContainer>
                <InputContainer>
                  <Text>모금 마감 기한</Text>
                  <MyDatePicker
                    ref={register}
                    value={date}
                    selected={date}
                    onChange={SetDate}
                    format="yyyy-MM-dd"
                  />
                  {/*<Input
                    name="due_day"
                    type="date"
                    value={date.format('yyyy-MM-dd HH:mm:ss')}
                    ref={register}
                    placeholder="due day"
                  />*/}
                </InputContainer>
              </SubContainer>
            </FormSubContainer>
            <TextArea
              name="content"
              type="textarea"
              ref={register}
              placeholder="short campaign info"
            />
            <Btn name="submit" type="submit" ref={register} />
            <FakeObjectTwo>제출하기</FakeObjectTwo>
          </Form>
        </Container>
      </Layout>
    </>
  );
}

export default RegistCamgaignPage;
