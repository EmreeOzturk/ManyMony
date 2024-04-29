import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


interface defaultAuthContext {
    user: string | null;
    token: string;
}

const defaultAuthContext: defaultAuthContext = {
    user: null,
    token: "",
}

const AuthContext = createContext<defaultAuthContext | undefined>(defaultAuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null)
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate()

    const loginAction = async () => {
        try {
            const response = await fetch("your-api-endpoint/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.data) {
                setUser(res.data.user);
                setToken(res.token);
                localStorage.setItem("site", res.token);
                navigate("/dashboard");
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            console.error(err);
        }
    }

    const logoutAction = async () => {
        try {
            localStorage.removeItem("site");
            setUser(null);
            setToken("");
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <AuthContext.Provider value={
            {
                user,
                token,
                logoutAction
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider



// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}


