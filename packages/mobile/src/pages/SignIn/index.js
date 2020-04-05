import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.png';

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

export default function SignIn() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const formRef = useRef(null);

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit(data) {
    const { email, password } = data;
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Gradient>
        <Container>
          <Image source={logo} />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormInput
              name="email"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Seu e-mail"
              keyboardType="email-address"
              returnKeyType="next"
            />

            <FormInput
              name="password"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Senha secreta"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current.submitForm()}
            />

            <SubmitButton
              loading={loading}
              onPress={() => formRef.current.submitForm()}
            >
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
