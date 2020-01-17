import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getSalesRequest } from '~/store/modules/sales/actions';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {
  Container, SalesList, Sale, Number, TimeAgo, Price,
} from './styles';

export default function Sales() {
  const dispatch = useDispatch();

  const sales = useSelector(state => state.sales.data);

  useEffect(() => {
    dispatch(getSalesRequest());
  }, [dispatch]);

  return (
    <>
      <Header title="Meus Pedidos" hasGoBack />

      <Container>
        <Background />

        <SalesList
          data={sales}
          keyExtractor={sale => String(sale.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: sale }) => (
            <Sale onPress={() => {}}>
              <Number>{`Pedido #${sale.id}`}</Number>
              <TimeAgo>{sale.dateFormatted}</TimeAgo>
              <Price>{sale.totalFormatted}</Price>
            </Sale>
          )}
        />
      </Container>
    </>
  );
}
