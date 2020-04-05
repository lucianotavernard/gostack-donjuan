import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Input';

import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });

      await schema.validate(data, { abortEarly: false });

      const { email, password } = data;
      dispatch(signInRequest(email, password));
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <img src={logo} alt="Don Juan Pizzaria" />

        <Input name="email" placeholder="Seu e-mail" />

        <Input type="password" name="password" placeholder="Senha secreta" />

        <button type="submit" onClick={handleSubmit}>
          Entrar
        </button>
      </Form>
    </>
  );
}
