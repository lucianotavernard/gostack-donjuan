import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.png';
import background from '~/assets/images/background.png';

import {
  Background,
  Gradient,
  Container,
  Form,
  Image,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background source={background}>
      <Gradient>
        <Container>
          <Image source={logo} />

          <Form>
            <FormInput
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Seu e-mail"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              secureTextEntry
              placeholder="Senha secreta"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              Entrar
            </SubmitButton>

            <SignLink onPress={() => navigation.navigate('SignUp')}>
              <SignLinkText>Criar conta gratuita</SignLinkText>
            </SignLink>
          </Form>
        </Container>
      </Gradient>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
