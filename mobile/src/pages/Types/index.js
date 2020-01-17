import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getTypesRequest, selectType } from '~/store/modules/types/actions';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {
  Container, TypesList, ProductType, Image, Name,
} from './styles';

export default function Types({ navigation }) {
  const dispatch = useDispatch();

  const types = useSelector(state => state.types.data);

  useEffect(() => {
    dispatch(getTypesRequest());
  }, [dispatch]);

  function handleClick(type) {
    dispatch(selectType(type));

    navigation.navigate('Sizes');
  }

  return (
    <>
      <Header title="Selecionar um tipo" hasGoBack />

      <Container>
        <Background />

        <TypesList
          numColumns={2}
          data={types}
          keyExtractor={type => String(type.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: type }) => (
            <ProductType onPress={() => handleClick(type)}>
              <Image source={{ uri: type.url }} />
              <Name>{type.name}</Name>
            </ProductType>
          )}
        />
      </Container>
    </>
  );
}

Types.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
