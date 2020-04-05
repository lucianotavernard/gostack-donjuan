import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { useRoute } from '@react-navigation/native';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

import Header from '~/components/Header';
import Background from '~/components/Background';
import Size from '~/components/Size';

import { Container, SizesList, Empty } from './styles';

export default function Sizes() {
  const route = useRoute();

  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadSizes() {
    try {
      const response = await api.get(`types/${route.params.type.id}/sizes`);

      const repository = response.data.map((size) => ({
        ...size,
        priceFormatted: formatPrice(size.price),
      }));

      setSizes(repository);
    } catch (error) {
      Alert.alert(
        'Erro ao obter lista de tamanhos dos produtos, tente novamente mais tarde!'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSizes();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadSizes();

    setRefreshing(false);
  }

  function renderSize({ item: size }) {
    return <Size data={size} />;
  }

  return (
    <>
      <Header title="Selecionar um tamanho" hasGoBack />

      <Container loading={loading}>
        <Background />

        {loading ? (
          <ActivityIndicator size="large" color="#0b2031" />
        ) : (
          <SizesList
            data={sizes}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderSize}
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
