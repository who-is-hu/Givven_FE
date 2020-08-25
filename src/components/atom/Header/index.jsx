import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Logo from 'assets/logo.PNG';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Wrapper = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  padding: 0px 32px 0 48px;
`;

const LogoBox = styled.div`
  width: 136px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Menu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1rem;
  color: #18a0fb;
  padding: 0 36px;
  cursor: pointer;
  transition: all 300ms ease;

  :hover {
    background-color: #cef5ff;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;

  ${Menu} ~ ${Menu} {
    margin-right: 4px;
  }
`;

const HeaderNav = () => {
  const user = useSelector(state => state.auth.user);
  const history = useHistory();

  const createElementByUserType = () => {
    if (user.type === 'normal')
      return <Menu onClick={() => history.push('/myPage')}>마이페이지</Menu>;
    return (
      <Menu onClick={() => history.push(`/dashboard/${user.type}`)}>
        대시보드
      </Menu>
    );
  };

  const logout = async () => {
    await axios
      .get('/auth/logout')
      .then(() => history.push('/'))
      .catch(e => {
        alert(e.response.data.message);
      });
  };
  return (
    <Wrapper>
      <LogoBox>{/* <img src={Logo} alt="logo.png" /> */}</LogoBox>
      <Nav>
        <Menu onClick={() => history.push('/main')}>캠페인</Menu>
        <Menu onClick={() => history.push('/market')}>상점</Menu>
        {user && createElementByUserType()}
      </Nav>
      <Nav>
        {user ? (
          <Menu
            onClick={() => {
              alert('logout');
              logout();
              history.push('/');
            }}
          >
            로그아웃
          </Menu>
        ) : (
          <>
            <Menu onClick={() => history.push('/signIn')}>로그인</Menu>
            <Menu onClick={() => history.push('/signUp')}>회원가입</Menu>
          </>
        )}
      </Nav>
    </Wrapper>
  );
};

export default HeaderNav;
