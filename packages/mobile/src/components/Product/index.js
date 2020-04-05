import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import {
  Container,
  Photo,
  Info,
  Name,
  Description,
  Time,
  TimeIcon,
  TimeDescription,
} from './styles';

export default function Product({ data }) {
  const navigation = useNavigation();

  function handleProductPress(product) {
    navigation.navigate('Types', { product });
  }

  return (
    <Container onPress={() => handleProductPress(data)}>
      <Photo source={{ uri: data.url }} />

      <Info>
        <Name>{data.name}</Name>
        <Description>{data.description}</Description>
        <Time>
          <TimeIcon name="alarm" size={16} />
          <TimeDescription>30 mins</TimeDescription>
        </Time>
      </Info>
    </Container>
  );
}

Product.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
