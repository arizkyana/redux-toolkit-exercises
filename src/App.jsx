import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CartPage from './pages/cart';
import LoginPage from './pages/login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CartPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
