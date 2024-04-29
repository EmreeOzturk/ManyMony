import { createContext, useState, useEffect } from "react";
import { emailRegex, passwordRegex, userNameRexex } from "../helper/consts";
import { account } from "../lib/appwrite";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import type { Models } from "appwrite";
import { ID } from "appwrite";

export const AuthContext = createContext({})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<Models.Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserStatus();
    }, []);
    const checkUserStatus = async () => {
        try {
            const accountDetails = await account.get();
            setUser(accountDetails as unknown as Models.Session | null);
        } catch (error) {
            console.error("Error checking user status:", error); // Log or handle error
        } finally {
            setLoading(false);
        }
    };
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

            const response = await account.createEmailPasswordSession(
                email as string,
                password as string
            );
            console.log(response)
            setUser(response);
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

            const response = await account.create(ID.unique(), email as string, password as string, name as string);
            console.log(response)
            toast.success("Register successful");
            return redirect("/login");
        } catch (error) {
            toast.error((error as Error).message);
            throw new Error((error as Error).message);
        }
    }

    const logoutAction = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            toast.success("Logout successful");
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
        logoutAction
    }

    return (
        <AuthContext.Provider
            value={store}
        >
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
