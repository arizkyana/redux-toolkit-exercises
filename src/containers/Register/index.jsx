import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NoAuth from '../../components/NoAuth';

import useRegister from './hooks/useRegister';

function Register() {
  const { doRegister, register } = useRegister();
  const [formValues, setFormValues] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRegister(formValues);
  };

  return (
    <NoAuth>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <Form onSubmit={handleSubmit} style={{ width: '30%' }}>
          <div className="mb-3">
            <h3>Register</h3>
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
              disabled={register.loading}
            >
              {register.loading ? 'Loading...' : 'Submit'}
            </Button>
            <Link to="/login">
              <Button
                type="button"
                variant="link"
                className="d-block"
                style={{ width: '100%' }}
              >
                Already have an account?
              </Button>
            </Link>
          </div>
        </Form>
      </Container>
    </NoAuth>
  );
}

export default Register;
