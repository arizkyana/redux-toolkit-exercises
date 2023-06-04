import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CartPage from './pages/cart';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';

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
    {
      path: '/profile',
      element: <ProfilePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
