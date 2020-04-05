import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addProduct } from '~/store/modules/cart/actions';

import { Container, PhotoContainer, Photo, Name, Price } from './styles';

export default function Size({ data }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleSizePress(product) {
    dispatch(addProduct(product));

    navigation.navigate('Cart');
  }

  console.log(data);

  return (
    <Container onPress={() => handleSizePress(data)}>
      <PhotoContainer>
        <Photo size={data.size.name} source={{ uri: data.size.url }} />
      </PhotoContainer>

      <Name>{data.size.name}</Name>
      <Price>{data.priceFormatted}</Price>
    </Container>
  );
}

Size.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
    }),
    priceFormatted: PropTypes.string,
  }).isRequired,
};
