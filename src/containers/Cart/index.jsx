import React from 'react';

import { Container } from 'react-bootstrap';

import Products from './Products';
import ShoppingCart from './ShoppingCart';

function Cart() {
  return (
    <Container>
      <ShoppingCart />
      <Products />
    </Container>
  );
}

export default Cart;
