import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getSalesRequest } from '~/store/modules/sale/actions';

import { Container, Title, SaleList, Sale } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sale.data);

  useEffect(() => {
    dispatch(getSalesRequest());
  }, [dispatch]);

  return (
    <Container>
      <Title>Últimos pedidos</Title>

      <SaleList>
        {sales.map((sale) => (
          <Sale key={sale.id}>
            <header>
              <h4>
                Pedido <strong>#{sale.id}</strong> - {sale.user.name}
              </h4>

              <time>{sale.createdAtFormatted}</time>
              <strong>{sale.totalFormatted}</strong>
            </header>

            <section>
              {sale.items.map((item) => (
                <article key={item.id}>
                  <img
                    src={item.type_size.type.url}
                    alt={item.type_size.type.name}
                  />

                  <div>
                    <h5>{item.type_size.type.name}</h5>
                    <p>{item.type_size.size.name}</p>
                  </div>
                </article>
              ))}
            </section>

            <footer>
              <strong>Observações: </strong> {sale.note || 'Sem observações'}
            </footer>
          </Sale>
        ))}
      </SaleList>
    </Container>
  );
}
