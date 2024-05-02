import { createContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import type { Models } from "appwrite";
import { ID } from "appwrite";
import { checkFormData } from "../helper";
import Loading from "../pages/Loading";

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
            console.error("Error checking user status:", error);
        } finally {
            setLoading(false);
        }
    };

    const loginAction = async (email: string, password: string) => {
        try {
            checkFormData(email, password);
            account.createEmailPasswordSession(
                email as string,
                password as string
            ).then((response) => {
                setUser(response);
                toast.success("Login successful", {
                    position: "bottom-right"
                });
            }).then(() => {
                window.location.href = "/dashboard";
            }).catch((error) => {
                toast.error((error as Error).message, {
                    position: "bottom-right"
                });
            });
        } catch (error) {
            toast.error((error as Error).message, {
                position: "bottom-right"
            });
            throw new Error((error as Error).message);
        }
    }

    const registerAction = async (email: string, password: string, confPassword: string, name: string) => {
        try {
            checkFormData(email, password, name);
            if (password !== confPassword) {
                throw new Error("Passwords do not match");
            }

            const response = await account.create(ID.unique(), email as string, password as string, name as string);
            console.log(response)
            toast.success("Register successful", {
                position: "bottom-right"
            });
            window.location.assign("/login");
        } catch (error) {
            toast.error((error as Error).message, {
                position: "bottom-right"
            });
            throw new Error((error as Error).message);
        }
    }

    const logoutAction = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            toast.success("Logout successful", {
                position: "bottom-right"
            });
            return redirect("/login");
        } catch (error) {
            toast.error((error as Error).message, {
                position: "bottom-right"
            });
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
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
