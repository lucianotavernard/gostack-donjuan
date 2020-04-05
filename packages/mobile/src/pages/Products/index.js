import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import Header from '~/components/Header';
import Background from '~/components/Background';
import Product from '~/components/Product';

import api from '~/services/api';

import { Container, ProductsList, Empty } from './styles';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadProducts() {
    try {
      const response = await api.get('products');

      setProducts(response.data);
    } catch (error) {
      Alert.alert(
        'Erro ao obter lista de produtos, tente novamente mais tarde!'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadProducts();

    setRefreshing(false);
  }

  function renderProduct({ item: product }) {
    return <Product data={product} />;
  }

  return (
    <>
      <Header title="Pizzaria Don Juan" />

      <Container loading={loading}>
        <Background />

        {loading ? (
          <ActivityIndicator size="large" color="#0b2031" />
        ) : (
          <ProductsList
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderProduct}
            refreshing={refreshing}
            onRefresh={refreshList}
            ListEmptyComponent={
              <Empty>Desculpe! Não há produtos cadastrados :(</Empty>
            }
          />
        )}
      </Container>
    </>
  );
}
