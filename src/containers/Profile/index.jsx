import React from 'react';

import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Auth from '../../components/Auth';

function Profile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);
  return (
    <Auth>
      <Container className="py-3">
        <Button
          className="mb-3"
          size="sm"
          type="button"
          variant="secondary"
          onClick={() => navigate('/')}
        >
          Back
        </Button>
        <h1 className="mb-5">Profile</h1>
        <div>
          <div className="mb-3">
            <h4>Email</h4>
            <div>{user?.email}</div>
          </div>
          <div className="mb-3">
            <h4>Role</h4>
            <div>{user?.role}</div>
          </div>
        </div>
      </Container>
    </Auth>
  );
}

export default Profile;
