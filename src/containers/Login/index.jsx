import React from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import useLogin from './hooks/useLogin';
import NoAuth from '../../components/NoAuth';

function Login() {
  const { loading, formValues, setFormValues, handleSubmit } = useLogin();
  return (
    <NoAuth>
      <Container
        style={{ minHeight: '100vh' }}
        className="d-flex justify-content-center align-items-center"
      >
        <Form
          style={{
            width: '30%',
          }}
          onSubmit={handleSubmit}
        >
          <h3 className="mb-3">Login</h3>
          <div className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              name="email"
              id="email"
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  email: e.target.value,
                });
              }}
              value={formValues.email ?? ''}
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  password: e.target.value,
                });
              }}
              value={formValues.password ?? ''}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="primary"
              className="d-block"
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Please wait...' : 'Go to My Account'}
            </Button>
          </div>
        </Form>
      </Container>
    </NoAuth>
  );
}

export default Login;
