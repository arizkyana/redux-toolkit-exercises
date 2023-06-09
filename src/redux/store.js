import { configureStore, combineReducers } from '@reduxjs/toolkit';

import todoReducer from './todo/slice';
import counterReducer from './counter/slice';
import cartReducer from './cart/slice';
import loginReducer from './login/slice';
import registerReducer from './register/slice';

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer,
});

export default configureStore({
  reducer: rootReducer,
});
