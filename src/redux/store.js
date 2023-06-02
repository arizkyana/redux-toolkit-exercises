import { configureStore, combineReducers } from '@reduxjs/toolkit';

import todoReducer from './todo/slice';
import counterReducer from './counter/slice';
import cartReducer from './cart/slice';

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
  cart: cartReducer,
});

export default configureStore({
  reducer: rootReducer,
});
