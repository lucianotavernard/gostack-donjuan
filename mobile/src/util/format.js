import numeral from 'numeral';

export const formatPrice = (number) => numeral(number).format('$,0.00');
