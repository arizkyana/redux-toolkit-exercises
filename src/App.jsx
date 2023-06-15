import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CartPage from './pages/cart';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/register';
import ReportPage from './pages/report';
import CarDetailPage from './pages/cardetail';
import UploadPage from './pages/upload';

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
      path: '/upload',
      element: <UploadPage />,
    },
    {
      path: '/car/:id',
      element: <CarDetailPage />,
    },
    {
      path: '/report',
      element: <ReportPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
