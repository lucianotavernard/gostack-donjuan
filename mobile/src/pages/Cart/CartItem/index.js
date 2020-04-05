import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { updateAmount, removeProduct } from '~/store/modules/cart/actions';

import {
  Container,
  Image,
  ProductInfo,
  Name,
  Description,
  Price,
  AmountContainer,
  AmountButton,
  AmountIcon,
  AmountInput,
  ButtonRemove,
  IconRemove,
} from './styles';

export default function CartItem({ data }) {
  const dispatch = useDispatch();

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
    <Container>
      <Image source={{ uri: data.type.url }} />

      <ProductInfo>
        <Name>{data.type.name}</Name>
        <Description>Tamanho: {data.size.name}</Description>
        <Price>{data.priceFormatted}</Price>
      </ProductInfo>

      <AmountContainer>
        <AmountButton onPress={() => decrement(data.id, data.amount - 1)}>
          <AmountIcon name="remove" size={20} />
        </AmountButton>

        <AmountInput
          keyboardType="numeric"
          defaultValue={String(data.amount)}
        />

        <AmountButton onPress={() => increment(data.id, data.amount + 1)}>
          <AmountIcon name="add" size={20} />
        </AmountButton>
      </AmountContainer>

      <ButtonRemove onPress={() => removeProductFromCart(data)}>
        <IconRemove name="delete-forever" size={20} />
      </ButtonRemove>
    </Container>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    amount: PropTypes.number,
    type: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
    }),
    size: PropTypes.shape({
      name: PropTypes.string,
    }),
    priceFormatted: PropTypes.string,
  }).isRequired,
};
