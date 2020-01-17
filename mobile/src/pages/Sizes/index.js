import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getSizesRequest } from '~/store/modules/sizes/actions';
import { addProduct } from '~/store/modules/cart/actions';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {
  Container, SizesList, ProductSize, ImageBox, Image, Name, Price,
} from './styles';

export default function Sizes({ navigation }) {
  const dispatch = useDispatch();

  const sizes = useSelector(state => state.sizes.data);

  useEffect(() => {
    dispatch(getSizesRequest());
  }, [dispatch]);

  function addProductToCart(product) {
    dispatch(addProduct(product));

    navigation.navigate('Cart');
  }

  return (
    <>
      <Header title="Selecionar um tamanho" hasGoBack />

      <Container>
        <Background />

        <SizesList
          numColumns={2}
          data={sizes}
          keyExtractor={typeSize => String(typeSize.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: typeSize }) => (
            <ProductSize onPress={() => addProductToCart(typeSize)}>
              <ImageBox>
                <Image size={typeSize.size.name} source={{ uri: typeSize.size.url }} />
              </ImageBox>

              <Name>{typeSize.size.name}</Name>
              <Price>{typeSize.priceFormatted}</Price>
            </ProductSize>
          )}
        />
      </Container>
    </>
  );
}

Sizes.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
