import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Header from '~/components/Header';
import Background from '~/components/Background';
import CartItem from './CartItem';

import {
  Container,
  CartList,
  ButtonsFooter,
  ButtonFinish,
  ButtonFinishText,
  IconFinish,
  ButtonGoBack,
  IconGoBack,
  Message,
  MessageText,
} from './styles';

export default function Cart() {
  const navigation = useNavigation();

  const products = useSelector((state) => state.cart.data);
  const hasItemsInCart = useMemo(() => products.length > 0, [products]);
  const totalItemsInCart = useMemo(() => {
    return products.reduce(
      (total, item) => total + parseFloat(item.price) * item.amount,
      0
    );
  }, [products]);

  function handleClick(route) {
    navigation.navigate(route);
  }

  function renderCartItem({ item: cartItem }) {
    return <CartItem data={cartItem} />;
  }

  return (
    <>
      <Header title="Carrinho" hasGoBack totalCart={totalItemsInCart} />

      <Container>
        <Background />

        <CartList
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={renderCartItem}
          ListFooterComponent={() =>
            hasItemsInCart && (
              <ButtonsFooter>
                <ButtonGoBack onPress={() => handleClick('Products')}>
                  <IconGoBack name="add-shopping-cart" size={18} />
                </ButtonGoBack>

                <ButtonFinish onPress={() => handleClick('Order')}>
                  <ButtonFinishText>Realizar Pedido</ButtonFinishText>
                  <IconFinish name="chevron-right" size={18} />
                </ButtonFinish>
              </ButtonsFooter>
            )
          }
          ListEmptyComponent={
            <Message>
              <MessageText>Desculpe, não há itens no carrinho. :(</MessageText>
            </Message>
          }
        />
      </Container>
    </>
  );
}
