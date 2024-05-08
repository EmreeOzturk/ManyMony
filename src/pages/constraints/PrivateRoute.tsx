import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'
import { Models } from "appwrite";


const PrivateRoute = () => {
    const auth = useAuth() as { user: Models.Session | null };
    // if (!auth?.user) return <Navigate to="/login" />;
    return (
        <section className="h-screen w-full bg-black bg-grid-white/[0.1]  relative flex  justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <Outlet />
        </section>

    )
}

export default PrivateRoute
