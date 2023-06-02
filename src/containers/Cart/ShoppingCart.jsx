import React, { useState } from 'react';
import { Container, Navbar, Button, NavDropdown, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import CartModal from './CartModal';
import auth from '../../utils/auth';

function ShoppingCart() {
  const { carts } = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Navbar>
      <CartModal show={showCart} onHide={() => setShowCart(false)} />
      <Container>
        <Navbar.Brand href="#home">FreshMarket</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link>
              <Button
                type="button"
                variant="light"
                onClick={() => setShowCart(true)}
              >
                Cart: {carts.length}
              </Button>
            </Nav.Link>
            <Nav.Link>
              <NavDropdown
                className="justify-content-end ml-3 d-block"
                title="Account"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleLogout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShoppingCart;
