import { createContext, useContext, useState } from "react";
import { emailRegex, passwordRegex, userNameRexex } from "../helper/consts";
import { account } from "../lib/appwrite";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import type { Models } from "appwrite";
import { ID } from "appwrite";

const AuthContext = createContext({})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<Models.Session | null>(null);


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
            setUser(result);
            toast.success("Login successful");
            return redirect("/");
        } catch (error) {
            toast.error((error as Error).message);
            throw new Error((error as Error).message);
        }
    }

    const registerAction = async (email: string, password: string, confPassword: string, name: string) => {
        try {
            if (email === "" || password === "" || confPassword === "" || name === "") {
                throw new Error("Please provide a valid input");
            }

            if (!emailRegex.test(email as string)) {
                throw new Error("Please provide a valid email");
            }

            if (!passwordRegex.test(password as string)) {
                throw new Error("Please provide a valid password");
            }

            if (password !== confPassword) {
                throw new Error("Passwords do not match");
            }

            if (!userNameRexex.test(name as string)) {
                throw new Error("Please provide a valid name");
            }

            console.log("hoop vurda")
            // const result = await account.create(ID.unique(), email as string, password as string, name as string);
            // console.log(result)
            toast.success("Register successful");
            return redirect("/login");
        } catch (error) {
            toast.error((error as Error).message);
            throw new Error((error as Error).message);
        }
    }

    const store = {
        user,
        loginAction,
        registerAction,
    }

    return (
        <AuthContext.Provider
            value={store}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}


