import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getProductsRequest, selectProduct } from '~/store/modules/products/actions';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {
  Container,
  ProductsList,
  Product,
  Image,
  ProductInfo,
  Name,
  Description,
  Time,
  TimeIcon,
  TimeDescription,
} from './styles';

export default function Products({ navigation }) {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.data);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  function handleProductPress(product) {
    dispatch(selectProduct(product));

    navigation.navigate('Types');
  }

  return (
    <>
      <Header title="Pizzaria Don Juan" />

      <Container>
        <Background />

        <ProductsList
          data={products}
          keyExtractor={product => String(product.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: product }) => (
            <Product onPress={() => handleProductPress(product)}>
              <Image source={{ uri: product.url }} />

              <ProductInfo>
                <Name>{product.name}</Name>
                <Description>{product.description}</Description>
                <Time>
                  <TimeIcon name="alarm" size={16} />
                  <TimeDescription>30 mins</TimeDescription>
                </Time>
              </ProductInfo>
            </Product>
          )}
        />
      </Container>
    </>
  );
}

Products.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
