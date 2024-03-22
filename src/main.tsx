import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard.tsx'
import { dashboardLoader } from './loaders/DashboardLoader.ts'
import { mainLoader } from './loaders/mainLoader.ts'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error.tsx'
import App from './App.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
