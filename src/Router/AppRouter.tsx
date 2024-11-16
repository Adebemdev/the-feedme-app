import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeConfig } from './routesconfig'

const router = createBrowserRouter(routeConfig, {
  future: {
    v7_skipActionErrorRevalidation: true,
  },
})

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
