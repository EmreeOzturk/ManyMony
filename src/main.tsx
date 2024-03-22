import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard.tsx'
import { dashboardLoader } from './loaders/DashboardLoader.ts'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
