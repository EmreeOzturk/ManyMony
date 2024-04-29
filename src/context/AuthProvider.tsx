import { createContext, useContext, useState } from "react";
interface defaultAuthContext {
    user: string | null;
    setUser?: (user: string) => void;
    token: string;
    setToken?: (token: string) => void;
}

const defaultAuthContext: defaultAuthContext = {
    user: null,
    token: "",
}

const AuthContext = createContext<defaultAuthContext | undefined>(defaultAuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null)
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    return (
        <AuthContext.Provider value={
            {
                user,
                token,
                setUser,
                setToken
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


