import React, { useState, useMemo, useRef } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Form } from '@unform/mobile';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { clearCart } from '~/store/modules/cart/actions';
import api from '~/services/api';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {
  Container,
  Content,
  FormInput,
  FormGroup,
  ButtonsContainer,
  CreateOrderButton,
  CreateOrderButtonText,
  CreateOrderButtonIcon,
} from './styles';

export default function Order() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const products = useSelector((state) => state.cart.data);
  const totalItemsInCart = useMemo(() => {
    return products.reduce(
      (total, item) => total + parseFloat(item.price) * item.amount,
      0
    );
  }, [products]);

  async function handleSubmit(data, { reset }) {
    try {
      setLoading(true);

      const { note, ...address } = data;

      const order = {
        note,
        address,
        items: products.map((item) => ({
          typeSizeId: item.id,
          price: item.price,
          total: item.price * item.amount,
          discount: 0,
        })),
        total: totalItemsInCart,
      };

      await api.post('sales', order);

      Alert.alert('Sucesso!', 'Seu pedido foi finalizada com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(clearCart());

            navigation.navigate('Orders');
          },
        },
      ]);

      reset();
    } catch (error) {
      Alert.alert(
        'Desculpe!',
        'Ocorreu algum erro ao efetuar o seu pedido, por favor tente novamente!'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header title="Realizar pedido" hasGoBack totalCart={totalItemsInCart} />

      <Container>
        <Background />

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormInput
              multiline
              name="note"
              numberOfLines={6}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Alguma observação?"
              returnKeyType="next"
            />

            <FormInput
              name="zipcode"
              keyboardType="numeric"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Qual seu CEP?"
              returnKeyType="next"
            />

            <FormGroup>
              <FormInput
                size={65}
                name="street"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Rua"
                returnKeyType="next"
              />

              <FormInput
                size={30}
                name="number"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Nº"
                returnKeyType="next"
              />
            </FormGroup>

            <FormInput
              name="neighborhood"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome do Bairro"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current.submitForm()}
            />

            <ButtonsContainer>
              <CreateOrderButton onPress={() => formRef.current.submitForm()}>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <>
                    <CreateOrderButtonText>Finalizar</CreateOrderButtonText>
                    <CreateOrderButtonIcon name="chevron-right" />
                  </>
                )}
              </CreateOrderButton>
            </ButtonsContainer>
          </Form>
        </Content>
      </Container>
    </>
  );
}
