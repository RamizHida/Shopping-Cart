// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import ShoppingPage from './Components/ShoppingPage/ShoppingPage.jsx';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx';
// import HomePage from './Components/HomePage/HomePage.jsx';

const router = createBrowserRouter([
  // { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
  { path: '/shopping-page', element: <ShoppingPage /> },
  { path: '/shopping-cart', element: <ShoppingCart /> },
]);

//
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
