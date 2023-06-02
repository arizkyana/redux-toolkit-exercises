import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useLogin from './hooks/useLogin';
import NoAuth from '../../components/NoAuth';

function Login() {
  const { doLogin, login } = useLogin();
  const [formValues, setFormValues] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doLogin(formValues);
  };

  return (
    <NoAuth>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <Form onSubmit={handleSubmit} style={{ width: '30%' }}>
          <div className="mb-3">
            <h3>Login</h3>
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              name="email"
              id="email"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  email: `${e.target.value}`.trim(),
                })
              }
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  password: `${e.target.value}`.trim(),
                })
              }
            />
          </div>
          <div className="mb-3">
            <Button
              type="submit"
              variant="primary"
              className="d-block mb-2"
              style={{ width: '100%' }}
              disabled={login.loading}
            >
              {login.loading ? 'Loading...' : 'Go to My Account'}
            </Button>
            <Button
              type="button"
              variant="link"
              className="d-block"
              style={{ width: '100%' }}
            >
              Create an Account
            </Button>
          </div>
        </Form>
      </Container>
    </NoAuth>
  );
}

export default Login;
