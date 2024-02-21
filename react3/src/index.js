import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Todo from './components/Todo';
import { Provider, createStoreHook } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todo />,
    children: []
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
