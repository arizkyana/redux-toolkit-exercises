import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

import './index.styles.css';
import axios from 'axios';

function CarDetail() {
  const [detailCar, setDetailCar] = useState();
  const [filePreview, setFilePreview] = useState();

  const fetchDetailOrder = async () => {
    try {
      const response = await axios.get(
        'https://bootcamp-rent-cars.herokuapp.com/customer/order/5186',
        {
          headers: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY4Njc1Mjk1MX0.SwL-80cFzzRkVLqV13PPOQe_xw1AFKF6yKvh5DenU1s',
          },
        }
      );
      setDetailCar(response.data.Car);
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchDetailOrder();
  }, []);

  const handleChangeFile = (e) => {
    const selectedFiles = e.target.files;
    setFilePreview(selectedFiles[0]);
    e.target.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const selectedFiles = e.dataTransfer.files;
    setFilePreview(selectedFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemovePreview = (e) => {
    e.preventDefault();
    setFilePreview(null);
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://api-car-rental.binaracademy.org/customer/order/5051/slip`,
        {
          slip: filePreview,
        },
        {
          headers: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGJjci5pbyIsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY4NjcyMzg3MX0.4X_bHQNxxDJ-hpl7iZikl77N8MubNkzJlHYN0TQGT-s',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('response > ', response);
      alert('upload success');
    } catch (error) {
      console.log('error > ', error);
    }
  };

  return (
    <Container className="pt-4 pb-5">
      <h1 className="mb-5">Car Detail</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Card className="card_car-description">
              <Card.Body>
                <h2>Detail Car</h2>
                <div>
                  <h4>Name</h4>
                  <div>{detailCar?.name}</div>
                </div>
                <div>
                  <h4>Category</h4>
                  <div>{detailCar?.category}</div>
                </div>
                <div>
                  <h4>Price</h4>
                  <div>{detailCar?.price}</div>
                </div>
                <div>
                  <h4>Image</h4>
                  <div style={{ width: '50%' }}>
                    <img
                      src={detailCar?.image}
                      alt="car"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h3 className="mb-3">Payment confirmation</h3>
                <div
                  draggable
                  className="wrapper_file-uploader"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <label
                    htmlFor="upload"
                    className="label_file-uploader d-flex justify-content-center align-items-center"
                  >
                    {filePreview ? (
                      <div style={{ width: '100%' }}>
                        <div className="p-3">
                          <Button
                            type="button"
                            variant="danger"
                            onClick={handleRemovePreview}
                            className="d-block"
                            style={{ width: '100%' }}
                          >
                            remove
                          </Button>
                        </div>
                        <img
                          src={URL.createObjectURL(filePreview)}
                          alt="img-preview"
                          className="d-block"
                          style={{ width: '100%' }}
                        />
                      </div>
                    ) : (
                      <span>Upload or Drag file here</span>
                    )}

                    <input
                      type="file"
                      name="upload"
                      id="upload"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleChangeFile}
                    />
                  </label>
                </div>
                <Button
                  type="submit"
                  variant="success"
                  className="d-block mt-3"
                  style={{ width: '100%' }}
                  disabled={!filePreview}
                >
                  Confirm
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default CarDetail;
