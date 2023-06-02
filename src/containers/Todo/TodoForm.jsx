import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function TodoForm(props) {
  const { todoItem: initialValues } = useSelector((state) => state.todo);
  const { mode = 'create', onHide, show, onSubmit } = props;

  const [formValues, setFormValues] = useState({
    title: null,
    description: null,
  });

  const resetForm = () => {
    setFormValues({
      title: null,
      description: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    resetForm();
  };

  useEffect(() => {
    if (initialValues && initialValues.title) {
      setFormValues({
        ...initialValues,
      });
    }
  }, [initialValues]);

  return (
    <Modal show={show} onHide={() => onHide()}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === 'create' ? 'Add New Todo' : 'Update Todo'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              name="title"
              id="title"
              type="text"
              onChange={(e) =>
                setFormValues({ ...formValues, title: e.target.value })
              }
              defaultValue={formValues.title ?? ''}
            />
          </div>
          <div className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              id="description"
              type="text"
              onChange={(e) =>
                setFormValues({ ...formValues, description: e.target.value })
              }
              defaultValue={formValues.description ?? ''}
            />
          </div>
          <div>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default TodoForm;
