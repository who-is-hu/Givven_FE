import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Logo from 'assets/logo.PNG';

import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: sticky;
  top: 0;
  left: 0;
  padding: 16px 32px 16px 16px;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const LogoBox = styled.div`
  width: 160px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
`;
const Word = styled.span`
  font-size: 1.2rem;
  color: #003d85;
`;

const Menu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
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

  ${Menu} ~ ${Menu} {
    margin-right: 4px;
  }
`;

const MenuNav = styled(Nav)`
  align-self: flex-end;
`;

const AuthNav = styled(Nav)`
  width: 360px;
  justify-content: flex-end;
  margin-top: 16px;
`;

const HeaderNav = () => {
  const user = useSelector(state => state.auth.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const createElementByUserType = () => {
    if (user.type === 'normal')
      return <Menu onClick={() => history.push('/myPage')}>MY PAGE</Menu>;
    return <Menu onClick={() => history.push(`/dashboard`)}>DASHBOARD </Menu>;
  };

  const logout = async () => {
    await axios
      .get('/auth/logout')
      .then(() => history.push('/'))
      .catch(e => {
        alert(e.response.data.message);
      });
    dispatch({ type: 'SET_USER', user: null });
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoBox onClick={() => history.push('/')}>
          {/* <img src={Logo} alt="logo.png" /> */}
        </LogoBox>
        <Word>문구문구 저스트 두잇!</Word>
      </LogoWrapper>
      <MenuNav>
        <Menu onClick={() => history.push('/main')}>CAMPAIGN</Menu>
        <Menu onClick={() => history.push('/market')}>SHOP</Menu>
        {user && createElementByUserType()}
      </MenuNav>
      <AuthNav>
        {user ? (
          <Menu
            onClick={() => {
              logout();
              alert('logout');
              history.push('/');
            }}
          >
            LOGOUT
          </Menu>
        ) : (
          <>
            <Menu onClick={() => history.push('/signIn')}>SIGN IN </Menu>
            <Menu onClick={() => history.push('/signUp')}>SIGN UP</Menu>
          </>
        )}
      </AuthNav>
    </Wrapper>
  );
};

export default HeaderNav;
