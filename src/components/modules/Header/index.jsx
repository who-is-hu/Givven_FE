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
  padding: 16px 32px 0px;
  z-index: 99;
  background-color: white;
  border-bottom: solid 4px rgba(183, 206, 177, 0.55);
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
  font-size: 1.3125rem;
  font-weight: 500;
  letter-spacing: -0.015em;
  color: #003d85;
`;

const Menu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: #18a0fb;
  padding: 0 36px 13px;
  cursor: pointer;
  transition: all 300ms ease;
  border-bottom: ${props => (props.underBar ? 'solid 6px #74BBC2' : '0')};
  position: relative;
  top: 4px;
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

  const pathName = history.location.pathname;
  let curIdx;
  if (pathName === '/myPage' || pathName === '/dashboard') {
    curIdx = 3;
  } else if (pathName === '/main') {
    curIdx = 1;
  } else if (pathName === '/market') {
    curIdx = 2;
  }

  const createElementByUserType = () => {
    if (user.type === 'normal')
      return (
        <Menu
          onClick={() => {
            history.push('/myPage');
          }}
          underBar={curIdx === 3}
        >
          MY PAGE
        </Menu>
      );
    return (
      <Menu
        onClick={() => {
          history.push(`/dashboard`);
        }}
        underBar={curIdx === 3}
      >
        DASHBOARD{' '}
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
    dispatch({ type: 'SET_USER', user: null });
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoBox onClick={() => history.push('/')}>
          {/* <img src={Logo} alt="logo.png" /> */}
        </LogoBox>
        <Word>GIVE + 기쁨 = GIVVEN</Word>
      </LogoWrapper>
      <MenuNav>
        <Menu
          onClick={() => {
            history.push('/main');
          }}
          underBar={curIdx === 1}
        >
          CAMPAIGN
        </Menu>
        <Menu
          onClick={() => {
            history.push('/market');
          }}
          underBar={curIdx === 2}
        >
          SHOP
        </Menu>
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
