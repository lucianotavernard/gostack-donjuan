import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { formatPrice } from '~/util/format';

import {
  Container,
  LeftButton,
  LeftButtonIcon,
  Text,
  CartButton,
  CartInfo,
  CartIcon,
} from './styles';

export default function Header({ title, hasGoBack, totalCart }) {
  const navigation = useNavigation();

  function handleBackPress() {
    navigation.goBack();
  }

  function handleMainPress() {
    navigation.navigate('Orders');
  }

  function handleToCartPress() {
    navigation.navigate('Cart');
  }

  return (
    <>
      <StatusBar backgroundColor="#0b2031" barStyle="light-content" />

      <Container>
        <LeftButton onPress={hasGoBack ? handleBackPress : handleMainPress}>
          <LeftButtonIcon
            name={hasGoBack ? 'keyboard-arrow-left' : 'history'}
            size={hasGoBack ? 20 : 24}
          />
        </LeftButton>

        <Text>{title}</Text>

        {!hasGoBack && (
          <CartButton onPress={handleToCartPress}>
            <CartInfo />
            <CartIcon size={18} />
          </CartButton>
        )}

        {!!totalCart && <Text autoLeft>{formatPrice(totalCart)}</Text>}
      </Container>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasGoBack: PropTypes.bool,
  totalCart: PropTypes.number,
};

Header.defaultProps = {
  hasGoBack: false,
  totalCart: null,
};
