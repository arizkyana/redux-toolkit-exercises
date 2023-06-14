import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import './index.styles.css';

function CarDetail() {
  const [filePreview, setFilePreview] = useState();

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

  return (
    <Container className="pt-4 pb-5">
      <h1 className="mb-5">Car Detail</h1>
      <Row>
        <Col>
          <Card className="card_car-description">
            <Card.Body>
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati nihil repellat vero assumenda, vel debitis natus unde
                ullam similique dolorum suscipit necessitatibus aperiam,
                incidunt doloremque pariatur praesentium eum quisquam ipsum?
              </p>
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
                type="button"
                variant="success"
                className="d-block mt-3"
                style={{ width: '100%' }}
              >
                Confirm
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CarDetail;
