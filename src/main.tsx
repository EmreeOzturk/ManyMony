import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import LangingPage from "./pages/LangingPage.tsx";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error.tsx";
import App from "./App.tsx";
import BudgetDetail from "./pages/dashboard/BudgetDetail.tsx";
import { budgetDetailLoader } from "./loaders/budgetDetailLoader.ts";
import LoginPage from "./pages/auth/LoginPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import PrivateRoute from "./pages/constraints/PrivateRoute.tsx";
import UnauthenticatedRoute from "./pages/constraints/UnauthenticatedRoute.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import { dashboardAction } from "./actions/dashboardAction.ts";
import { dashboardLoader } from "./loaders/dashboardLoader.ts";
import { budgetDetailAction } from "./actions/budgetDetailAction.ts";
import BudgetDetailError from "./pages/dashboard/BudgetDetailError.tsx";
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
            action: dashboardAction,
            loader: dashboardLoader,
          },
          {
            path: "/budgets/:budgetId",
            element: <BudgetDetail />,
            errorElement: <BudgetDetailError />,
            loader: budgetDetailLoader,
            action: budgetDetailAction,
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
