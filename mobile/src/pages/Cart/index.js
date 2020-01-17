import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { updateAmount, removeProduct } from '~/store/modules/cart/actions';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {
  Container,
  CartList,
  Product,
  Image,
  ProductInfo,
  Name,
  Description,
  Price,
  AmountContainer,
  AmountButton,
  AmountIcon,
  AmountInput,
  ButtonsFooter,
  ButtonFinishText,
  ButtonFinish,
  ButtonRemove,
  ButtonGoBack,
  IconRemove,
  IconGoBack,
  IconFinish,
  Message,
  MessageText,
} from './styles';

export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.data);
  const hasItemsInCart = useSelector(state => state.cart.data.length > 0);
  const totalItemsInCart = useMemo(
    () => products.reduce((total, item) => total + parseFloat(item.price) * item.amount, 0),
    [products],
  );

  function handleClick(route) {
    navigation.navigate(route);
  }

  function decrement(productId, amount) {
    dispatch(updateAmount(productId, amount));
  }

  function increment(productId, amount) {
    dispatch(updateAmount(productId, amount));
  }

  function removeProductFromCart(product) {
    dispatch(removeProduct(product));
  }

  return (
    <>
      <Header title="Carrinho" hasGoBack leftInfo={totalItemsInCart} />

      <Container>
        <Background />

        {products.length === 0 && (
          <Message>
            <MessageText>Desculpe, não há itens no carrinho. :(</MessageText>
          </Message>
        )}

        <CartList
          data={products}
          keyExtractor={product => String(product.id)}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => hasItemsInCart && (
          <ButtonsFooter>
            <ButtonGoBack onPress={() => handleClick('Products')}>
              <IconGoBack name="add-shopping-cart" size={18} />
            </ButtonGoBack>

            <ButtonFinish onPress={() => handleClick('Finish')}>
              <ButtonFinishText>Realizar Pedido</ButtonFinishText>
              <IconFinish name="chevron-right" size={18} />
            </ButtonFinish>
          </ButtonsFooter>
          )
          }
          renderItem={({ item: product }) => (
            <Product>
              <Image source={{ uri: product.type.url }} />

              <ProductInfo>
                <Name>{product.type.name}</Name>
                <Description>Tamanho: {product.size.name}</Description>
                <Price>{product.priceFormatted}</Price>
              </ProductInfo>

              <AmountContainer>
                <AmountButton onPress={() => decrement(product.id, product.amount - 1)}>
                  <AmountIcon name="remove" size={20} />
                </AmountButton>

                <AmountInput
                  editable={false}
                  keyboardType="numeric"
                  maxLength={2}
                  defaultValue={String(product.amount)}
                />

                <AmountButton onPress={() => increment(product.id, product.amount + 1)}>
                  <AmountIcon name="add" size={20} />
                </AmountButton>
              </AmountContainer>

              <ButtonRemove onPress={() => removeProductFromCart(product)}>
                <IconRemove name="delete-forever" size={20} />
              </ButtonRemove>
            </Product>
          )}
        />
      </Container>
    </>
  );
}

Cart.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
