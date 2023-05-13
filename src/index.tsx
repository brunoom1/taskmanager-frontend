import React from 'react';
import ReactDOM from 'react-dom/client';

import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from './pages/home';
import { Signup } from './pages/signup/index';

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }, 
    {
      path: '/signup',
      element: <Signup />
    }
  ])

  root.render(
    <React.StrictMode>
      <FluentProvider theme={teamsLightTheme}>
        <RouterProvider router={router}/>
      </FluentProvider>
    </React.StrictMode>
  );
}