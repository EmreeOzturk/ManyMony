import { createContext, useContext, useState } from "react";
import { emailRegex, passwordRegex } from "../helper/consts";
import { account } from "../lib/appwrite";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

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

    const loginAction = async (email: string, password: string) => {
        try {
            if (email === "" || password === "") {
                throw new Error("Please provide a valid input");
            }

            if (!emailRegex.test(email as string)) {
                throw new Error("Please provide a valid email");
            }

            if (!passwordRegex.test(password as string)) {
                throw new Error("Please provide a valid password");
            }

            const result = await account.createEmailPasswordSession(
                email as string,
                password as string
            );

            toast.success("Login successful");
            return redirect("/");
        } catch (error) {
            toast.error((error as Error).message);
            throw new Error((error as Error).message);
        }
    }

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


