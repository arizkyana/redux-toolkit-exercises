import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { remove } from '../../redux/cart/slice';

function CartModal(props) {
  const { show, onHide } = props;

  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const summary = () => {
    if (carts && carts.length > 0) {
      return carts.reduce((prevValue, item) => item.price + prevValue, 0);
    }
    return 0;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>My Carts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carts && carts.length > 0 ? (
          <>
            {carts.map((item) => (
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5>{item.name}</h5>
                  <h6>{item.id}</h6>
                  <p>{`Rp. ${item.price}`}</p>
                </div>
                <div>
                  <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(remove(item.id))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-center">
              <div>Total</div>
              <div>{`Rp. ${summary()}`}</div>
            </div>
          </>
        ) : (
          <div>
            <p>{`Your cart is empty. Let's add a product`}</p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default CartModal;
