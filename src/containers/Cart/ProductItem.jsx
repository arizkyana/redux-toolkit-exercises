import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { add, remove } from '../../redux/cart/slice';

function ProductItem(props) {
  const { name, price, id, createdAt, isAdded } = props;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      add({
        name,
        price,
        id,
        createdAt,
      })
    );
  };

  const handleRemove = () => {
    dispatch(remove(id));
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <h5>{id}</h5>
        <p>{`Rp. ${price}`}</p>
      </Card.Body>
      <Card.Footer>
        {isAdded ? (
          <Button
            type="button"
            variant="danger"
            className="d-block"
            style={{ width: '100%' }}
            onClick={() => handleRemove()}
          >
            Remove
          </Button>
        ) : (
          <Button
            type="button"
            variant="success"
            className="d-block"
            style={{ width: '100%' }}
            onClick={() => handleAddToCart()}
          >
            Add to Cart
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}

export default ProductItem;
