import React from 'react';

import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: 'favorites', element: <FavoritesPage /> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
