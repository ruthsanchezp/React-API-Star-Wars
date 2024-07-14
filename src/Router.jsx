import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Characters from './Characters';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><Home /></App>,
  },
  {
    path: 'characters',
    element: <App><Characters /></App>,
  },
]);

export default router;
