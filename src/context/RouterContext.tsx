import { createContext } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from '../App';
import { mainLoader } from '../loaders/mainLoader';
import LangingPage from '../pages/LangingPage';
import Error from '../pages/Error';
import { dashboardLoader } from '../loaders/DashboardLoader';
import { dashboardAction } from '../actions/dashboardAction';
import PrivateRoute from '../pages/constraints/PrivateRoute';
import UnauthenticatedRoute from '../pages/constraints/UnauthenticatedRoute';
import { logoutAction } from '../actions/logoutAction';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

export const RouterContext = createContext({})
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
                    // {
                    //     path: "/expenses",
                    //     element: <AllExpenses />,
                    //     loader: expensesLoader,
                    //     action: expensesAction,
                    //     errorElement: <Error />,
                    // },
                    {
                        path: "dashboard",
                        element: <div>dashboard page</div>,
                        // loader: dashboardLoader,
                        // action: dashboardAction,
                        errorElement: <Error />,
                    },
                    // {
                    //     path: "/budgets/:budgetId",
                    //     element: <BudgetDetail />,
                    //     errorElement: <Error />,
                    //     loader: budgetDetailLoader,
                    //     action: budgetDetailAction
                    // }
                ]
            },
            {
                path: "/logout",
                action: logoutAction,
            },
        ],
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
            }
        ]
    }
]);


const RouterProviderr = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <RouterContext.Provider value={router}>
            <RouterProvider router={router} />
            {children}
        </RouterContext.Provider>
    )
}

export default RouterProviderr