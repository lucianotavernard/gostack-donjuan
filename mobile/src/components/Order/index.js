import React from 'react';
import PropTypes from 'prop-types';

import { Container, Number, TimeAgo, Price } from './styles';

export default function Order({ data }) {
  return (
    <Container onPress={() => {}}>
      <Number>{`Pedido #${data.id}`}</Number>
      <TimeAgo>{data.dateFormatted}</TimeAgo>
      <Price>{data.totalFormatted}</Price>
    </Container>
  );
}

Order.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    dateFormatted: PropTypes.string,
    totalFormatted: PropTypes.string,
  }).isRequired,
};
