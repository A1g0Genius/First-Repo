import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([{
  path: "/",
  element: <Home />
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>

      </RouterProvider>
    </Provider>
  </React.StrictMode>
);