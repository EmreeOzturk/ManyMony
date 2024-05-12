import {  Outlet } from "react-router-dom";
// import { useAuth } from '../../hooks/useAuth'
// import { Models } from "appwrite";
const UnauthenticatedRoute = () => {
    // const auth = useAuth() as { user: Models.Session | null };
    // if (auth?.user) return <Navigate to="/" />;
    return <Outlet />;
}

export default UnauthenticatedRoute