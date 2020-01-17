import React, { useState, useMemo, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { createSaleRequest } from '~/store/modules/sales/actions';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {
  Container,
  Content,
  InputGroup,
  Input,
  ButtonsFooter,
  ButtonFinish,
  ButtonFinishText,
  IconFinish,
} from './styles';

export default function Finish() {
  const dispatch = useDispatch();

  const [note, setNote] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const neighborhoodRef = useRef();
  const postalCodeRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();

  const products = useSelector(state => state.cart.data);
  const totalItemsInCart = useMemo(
    () => products.reduce((total, item) => total + parseFloat(item.price) * item.amount, 0),
    [products],
  );

  const hasSubmitDisabled = useMemo(() => {
    const addressExists = !postalCode || !street || !number || !neighborhood;

    return addressExists;
  }, [postalCode, street, number, neighborhood]);

  function handleSubmit() {
    const sale = {
      note,
      address: {
        postalCode,
        street,
        number,
        neighborhood,
      },
      items: products.map(item => ({
        typeSizeId: item.id,
        price: item.price,
        total: item.price * item.amount,
        discount: 0,
      })),
      total: totalItemsInCart,
    };

    dispatch(createSaleRequest(sale));
  }

  return (
    <>
      <Header title="Realizar pedido" hasGoBack leftInfo={totalItemsInCart} />

      <Container>
        <Background />

        <Content>
          <Input
            multiline
            numberOfLines={6}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Alguma observação?"
            value={note}
            onChangeText={setNote}
          />

          <Input
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Qual seu CEP?"
            ref={postalCodeRef}
            onSubmitEditing={() => streetRef.current.focus()}
            value={postalCode}
            onChangeText={setPostalCode}
          />

          <InputGroup>
            <Input
              width={65}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Rua"
              ref={streetRef}
              onSubmitEditing={() => numberRef.current.focus()}
              value={street}
              onChangeText={setStreet}
            />

            <Input
              width={30}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nº"
              ref={numberRef}
              onSubmitEditing={() => neighborhoodRef.current.focus()}
              value={number}
              onChangeText={setNumber}
            />
          </InputGroup>

          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Bairro"
            ref={neighborhoodRef}
            onSubmitEditing={handleSubmit}
            value={neighborhood}
            onChangeText={setNeighborhood}
          />

          <ButtonsFooter>
            <ButtonFinish onPress={handleSubmit} disabled={hasSubmitDisabled}>
              <ButtonFinishText>Finalizar</ButtonFinishText>
              <IconFinish name="chevron-right" size={18} />
            </ButtonFinish>
          </ButtonsFooter>
        </Content>
      </Container>
    </>
  );
}
