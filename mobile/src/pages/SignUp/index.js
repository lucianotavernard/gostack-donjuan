import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';

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

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Background source={background}>
      <Gradient>
        <Container>
          <Image source={logo} />

          <Form>
            <FormInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Seu nome completo"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={name}
              onChangeText={setName}
            />

            <FormInput
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Seu e-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              secureTextEntry
              placeholder="Sua senha secreta"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              Criar conta
            </SubmitButton>

            <SignLink onPress={() => navigation.navigate('SignIn')}>
              <SignLinkText>Já tenho login</SignLinkText>
            </SignLink>
          </Form>
        </Container>
      </Gradient>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
