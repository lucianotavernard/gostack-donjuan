import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { parseISO, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';
import { formatPrice } from '~/util/format';

import Header from '~/components/Header';
import Background from '~/components/Background';
import Order from '~/components/Order';

import { Container, SalesList, Empty } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadSales() {
    try {
      const response = await api.get('sales');

      const repository = response.data.map((order) => ({
        ...order,
        dateFormatted: formatDistanceToNow(parseISO(order.createdAt), {
          addSuffix: true,
          locale: ptBR,
        }),
        totalFormatted: formatPrice(order.total),
      }));

      setOrders(repository);
    } catch (error) {
      Alert.alert(
        'Erro ao obter lista de pedidos, tente novamente mais tarde!'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSales();
  }, []);

  async function refreshList() {
    setRefreshing(true);

    await loadSales();

    setRefreshing(false);
  }

  function renderOrder({ item: order }) {
    return <Order data={order} />;
  }

  return (
    <>
      <Header title="Meus Pedidos" hasGoBack />

      <Container loading={loading}>
        <Background />

        {loading ? (
          <ActivityIndicator size="large" color="#0b2031" />
        ) : (
          <SalesList
            data={orders}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderOrder}
            refreshing={refreshing}
            onRefresh={refreshList}
            ListEmptyComponent={
              <Empty>Desculpe! Não há pedidos efetuados :(</Empty>
            }
          />
        )}
      </Container>
    </>
  );
}
