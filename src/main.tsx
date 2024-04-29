
import ReactDOM from 'react-dom/client'
// import Dashboard from './pages/Dashboard.tsx'
import LangingPage from './pages/LangingPage.tsx'
import { expensesLoader } from './loaders/expensesLoader.ts'
import { expensesAction } from './actions/expensesAction.ts'
import { mainLoader } from './loaders/mainLoader.ts'
import { dashboardLoader } from './loaders/DashboardLoader.ts'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error.tsx'
import App from './App.tsx'
import AllExpenses from './pages/AllExpenses.tsx'
import { logoutAction } from './actions/logoutAction.ts'
import { dashboardAction } from './actions/dashboardAction.ts'
import BudgetDetail from './pages/BudgetDetail.tsx'
import { budgetDetailLoader } from './loaders/budgetDetailLoader.ts'
import { budgetDetailAction } from './actions/budgetDetailAction.ts'
import LoginPage from './pages/auth/LoginPage.tsx'
import RegisterPage from './pages/auth/RegisterPage.tsx'
import AuthProvider from './context/AuthProvider.tsx'
import PrivateRoute from './pages/PrivateRoute.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LangingPage />,
        loader: dashboardLoader,
        errorElement: <Error />,
        action: dashboardAction
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/expenses",
            element: <AllExpenses />,
            loader: expensesLoader,
            action: expensesAction,
            errorElement: <Error />,
          },
          {
            path: "/budgets/:budgetId",
            element: <BudgetDetail />,
            errorElement: <Error />,
            loader: budgetDetailLoader,
            action: budgetDetailAction
          }
        ]
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </AuthProvider>
)
