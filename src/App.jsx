import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CartPage from './pages/cart';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/register';
import ReportPage from './pages/report';
import CarDetailPage from './pages/cardetail';

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
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/profile',
      element: <ProfilePage />,
    },
    {
      path: '/report',
      element: <ReportPage />,
    },
    {
      path: '/car/:id',
      element: <CarDetailPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
