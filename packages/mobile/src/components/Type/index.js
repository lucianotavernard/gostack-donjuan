import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Container, Photo, Name } from './styles';

export default function Type({ data }) {
  const route = useRoute();
  const navigation = useNavigation();

  function handleTypePress(type) {
    navigation.navigate('Sizes', { product: route.params.product, type });
  }

  return (
    <Container onPress={() => handleTypePress(data)}>
      <Photo source={{ uri: data.url }} />
      <Name>{data.name}</Name>
    </Container>
  );
}

Type.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
