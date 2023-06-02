import React from 'react';

import { Container } from 'react-bootstrap';

import Products from './Products';
import ShoppingCart from './ShoppingCart';

import Auth from '../../components/Auth';

function Cart() {
  return (
    <Auth>
      <Container>
        <ShoppingCart />
        <Products />
      </Container>
    </Auth>
  );
}

export default Cart;
