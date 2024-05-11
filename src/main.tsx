import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import LangingPage from "./pages/LangingPage.tsx";
import { expensesLoader } from "./loaders/expensesLoader.ts";
import { expensesAction } from "./actions/expensesAction.ts";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error.tsx";
import App from "./App.tsx"; 
import AllExpenses from "./pages/dashboard/AllExpenses.tsx";
import BudgetDetail from "./pages/dashboard/BudgetDetail.tsx";
import { budgetDetailLoader } from "./loaders/budgetDetailLoader.ts";
import { budgetDetailAction } from "./actions/budgetDetailAction.ts";
import LoginPage from "./pages/auth/LoginPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import PrivateRoute from "./pages/constraints/PrivateRoute.tsx";
import UnauthenticatedRoute from "./pages/constraints/UnauthenticatedRoute.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LangingPage />,
        errorElement: <Error />,
      },
      {
        element: <UnauthenticatedRoute />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            errorElement: <Error />,
            // action adn loader
          },
          {
            path: "/budgets",
            errorElement: <Error />,
            element: <div>budgets</div>,
          },
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
            action: budgetDetailAction,
          },
          {
            path: "/analytics",
            errorElement: <Error />,
            element: <div>analytics</div>,
          },
          {
            path: "/settings",
            errorElement: <Error />,
            element: <div>settings</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
