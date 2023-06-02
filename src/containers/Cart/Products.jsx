import React from 'react';
import dayjs from 'dayjs';
import { Col, Row } from 'react-bootstrap';

import { customAlphabet } from 'nanoid';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const dummyProducts = Array.from({ length: 10 }, (_, index) => ({
  name: `Avocado - ${index}`,
  price: Math.floor(Math.random() * 1000),
  createdAt: dayjs().format(),
  id: customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')(5),
}));

function Products() {
  const { carts } = useSelector((state) => state.cart);

  const isAdded = (productItem) => {
    const found = carts.findIndex((item) => item.id === productItem.id);
    if (found >= 0) return true;
    return false;
  };

  return (
    <div>
      {dummyProducts && dummyProducts.length > 0 ? (
        <Row>
          {dummyProducts.map((item) => (
            <Col lg={3} className="g-3" key={item.id}>
              <ProductItem
                name={item.name}
                price={item.price}
                id={item.id}
                createdAt={item.createdAt}
                isAdded={isAdded(item)}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div>Product is empty. Please create a new one!</div>
      )}
    </div>
  );
}

export default Products;
