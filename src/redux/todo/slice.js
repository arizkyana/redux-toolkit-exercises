import { createSlice } from '@reduxjs/toolkit';

import dayjs from 'dayjs';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    todoItem: null,
  },
  reducers: {
    add(state, action) {
      const currentTodos = [...state.todos];
      const newTodo = {
        ...action.payload,
        createdAt: dayjs().format(),
      };
      currentTodos.push(newTodo);
      state.todos = currentTodos;
    },
    remove(state, action) {
      const currentTodos = [...state.todos];
      const { index } = action.payload;
      currentTodos.splice(index, 1);
      state.todos = currentTodos;
    },
    update(state, action) {
      const currentTodos = [...state.todos];
      const { index, ...todoItem } = action.payload;
      currentTodos[index] = todoItem;
      state.todos = currentTodos;
    },
    setTodoItem(state, action) {
      state.todoItem = action.payload;
    },
  },
});

export const { add, remove, update, setTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
