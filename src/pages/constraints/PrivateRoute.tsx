import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'
import { Models } from "appwrite";
const PrivateRoute = () => {
    const auth = useAuth() as { user: Models.Session | null };
    if (!auth?.user) return <Navigate to="/login" />;
    return (<main className="flex ">
        <nav className=" flex flex-col items-center justify-center h-screen w-60 bg-slate-500 ">
            <ul className="flex flex-col p-4">
                <li className="p-2">Dashboard</li>
                <li className="p-2">Budgets</li>
                <li className="p-2">Expenses</li>
            </ul>
        </nav>
        <section className="bg-sky-950 flex-1">
            <Outlet />
        </section>
    </main>)
}

export default PrivateRoute