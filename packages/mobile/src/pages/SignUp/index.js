import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';

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

export default function SignUp() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const formRef = useRef(null);

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit(data) {
    const { name, email, password } = data;
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Gradient>
        <Container>
          <Image source={logo} />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormInput
              name="name"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Seu nome completo"
              returnKeyType="next"
            />

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
              placeholder="Sua senha secreta"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current.submitForm()}
            />

            <SubmitButton
              loading={loading}
              onPress={() => formRef.current.submitForm()}
            >
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
