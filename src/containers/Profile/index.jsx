import React from 'react';

import { Container, Button, Row, Col, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);
  return (
    <Container className="py-3">
      <div className="mb-3">
        <Button type="button" variant="secondary" onClick={() => navigate('/')}>
          Back
        </Button>
      </div>
      <h3 className="mb-5">Profile</h3>
      <Row>
        <Col lg={2}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/profile" className="p-0">
              My Account
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="">
          <div className="mb-3">
            <div>Email</div>
            <div>{user.email}</div>
          </div>
          <div>
            <div>Role</div>
            <div>{user.role}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
