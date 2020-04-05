import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { useRoute } from '@react-navigation/native';

import api from '~/services/api';

import Header from '~/components/Header';
import Background from '~/components/Background';
import Type from '~/components/Type';

import { Container, TypesList, Empty } from './styles';

export default function Types() {
  const route = useRoute();

  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadTypes() {
    try {
      const response = await api.get(
        `products/${route.params.product.id}/types`
      );

      setTypes(response.data);
    } catch (error) {
      Alert.alert(
        'Erro ao obter lista de tipos dos produtos, tente novamente mais tarde!'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTypes();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadProductTypes();

    setRefreshing(false);
  }

  function renderProductType({ item: type }) {
    return <Type data={type} />;
  }

  return (
    <>
      <Header title="Selecionar um tipo" hasGoBack />

      <Container loading={loading}>
        <Background />

        {loading ? (
          <ActivityIndicator size="large" color="#0b2031" />
        ) : (
          <TypesList
            data={types}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderProductType}
            refreshing={refreshing}
            onRefresh={refreshList}
            ListEmptyComponent={
              <Empty>Desculpe! Não há tipos de produtos cadastrados :(</Empty>
            }
          />
        )}
      </Container>
    </>
  );
}
