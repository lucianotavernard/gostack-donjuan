import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import { formatPrice } from '~/util/format';

import {
  Container, LeftButton, Icon, Text, CartButton, CartInfo, CartIcon,
} from './styles';

function Header({
  title, hasGoBack, navigation, leftInfo,
}) {
  function handleBackPress() {
    navigation.goBack();
  }

  function handleMainPress() {
    navigation.navigate('Sales');
  }

  const totalFormated = useMemo(() => `$${parseFloat(leftInfo).toFixed(2)}`, [leftInfo]);

  return (
    <>
      <StatusBar backgroundColor="#0b2031" barStyle="light-content" />

      <Container hasGoBack={hasGoBack}>
        <LeftButton onPress={hasGoBack ? handleBackPress : handleMainPress}>
          <Icon name={hasGoBack ? 'keyboard-arrow-left' : 'history'} size={hasGoBack ? 20 : 24} />
        </LeftButton>

        <Text>{title}</Text>

        {!hasGoBack && (
          <CartButton onPress={() => navigation.navigate('Cart')}>
            <CartInfo />
            <CartIcon name="handbag" size={18} />
          </CartButton>
        )}

        {!!leftInfo && <Text leftInfo={leftInfo}>{totalFormated}</Text>}
      </Container>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  hasGoBack: PropTypes.bool,
  leftInfo: PropTypes.number,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

Header.defaultProps = {
  hasGoBack: false,
  leftInfo: null,
};

export default withNavigation(Header);
