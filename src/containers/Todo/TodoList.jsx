import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { add, remove, update, setTodoItem } from '../../redux/todo/slice';
import TodoForm from './TodoForm';

function TodoList() {
  const { todos, todoItem } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [openModalAddForm, setOpenModalAddForm] = useState(false);
  const [openModalEditForm, setOpenModalEditForm] = useState(false);

  const handleSubmitAddTodo = (formValues) => {
    dispatch(add(formValues));
    setOpenModalAddForm(false);
  };

  const handleSubmitEditTodo = (formValues) => {
    dispatch(update(formValues));
    setOpenModalEditForm(false);
    dispatch(setTodoItem({}));
  };

  return (
    <Container className="py-3">
      <TodoForm
        mode="create"
        show={openModalAddForm}
        onHide={() => {
          setOpenModalAddForm(false);
        }}
        onSubmit={handleSubmitAddTodo}
      />
      <TodoForm
        mode="edit"
        show={openModalEditForm}
        initialValues={todoItem}
        onHide={() => {
          setOpenModalEditForm(false);
          dispatch(setTodoItem({}));
        }}
        onSubmit={handleSubmitEditTodo}
      />
      <div className="d-flex justify-content-between align-items-center">
        <h1>Todo App</h1>
        <Button
          type="button"
          onClick={() => {
            setOpenModalAddForm(true);
            dispatch(setTodoItem({}));
          }}
        >
          Add New
        </Button>
      </div>
      <div className="py-5">
        {todos && todos.length > 0 ? (
          <>
            {todos.map((item, index) => (
              <Card key={item.createdAt} className="mb-3">
                <Card.Header>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p>{item.description}</p>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      type="button"
                      variant="secondary"
                      className="d-block"
                      size="sm"
                      style={{ marginRight: '.3rem' }}
                      onClick={() => {
                        dispatch(setTodoItem({ ...item, index }));
                        setOpenModalEditForm(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      variant="danger"
                      className="d-block"
                      size="sm"
                      onClick={() => dispatch(remove({ index }))}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </>
        ) : (
          <div>
            <p>{`Todo is empty. Let's create one !`}</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default TodoList;
