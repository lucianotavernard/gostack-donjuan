import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import Logomarca from '~/assets/images/logo.svg';

import {
  Container, Cover, Form, Logo, Input, Button,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: '', password: '' });

  function handleInputChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const { email, password } = input;

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Cover />

      <Form>
        <Logo src={Logomarca} />

        <Input
          type="text"
          name="email"
          value={input.email}
          onChange={handleInputChange}
          placeholder="Seu e-mail"
          autocomplete="off"
        />

        <Input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
          placeholder="Senha secreta"
          autocomplete="off"
        />

        <Button onClick={handleSubmit} disabled={!input}>Entrar</Button>
      </Form>
    </Container>
  );
}
