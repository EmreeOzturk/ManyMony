import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Models } from "appwrite";
const PrivateRoute = () => {
    const auth = useAuth() as { user: Models.Session | null };
    if (!auth?.user) return <Navigate to="/login" />;
    return <Outlet />;
}

export default PrivateRoute