import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.png';

import {
  Container,
  Content,
  Logo,
  UserOptions,
  UserInfo,
  Button,
  Cart,
  Icon,
} from './styles';

export default function Header() {
  const user = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logomarca" />
          <h6 className="logo-name">Pizzaria Don Juan</h6>
        </Logo>

        <UserOptions>
          <UserInfo>
            <h6 className="username">{user?.name}</h6>
            <Button onClick={handleClick}>Sair do app</Button>
          </UserInfo>

          <Cart>
            <Icon />
          </Cart>
        </UserOptions>
      </Content>
    </Container>
  );
}
