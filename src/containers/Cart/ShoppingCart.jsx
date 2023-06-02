import React, { useState } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartModal from './CartModal';

function ShoppingCart() {
  const { carts } = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState();

  return (
    <Navbar>
      <CartModal show={showCart} onHide={() => setShowCart(false)} />
      <Container>
        <Navbar.Brand href="#home">FreshMarket</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button
              type="button"
              variant="light"
              onClick={() => setShowCart(true)}
            >
              Cart: {carts.length}
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShoppingCart;
