import { createContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import { toast } from "react-toastify";
import type { Models } from "appwrite";
import { ID } from "appwrite";
import { checkFormData } from "../helper";
import Loading from "../pages/Loading";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex, phoneRegex } from "../helper/consts";
export const AuthContext = createContext({})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<Models.Session | null>(null);
    const [phoneVerification, setPhoneVerification] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const navigate = useNavigate();
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

    const loginAction = async (email?: string, password?: string, phone?: string) => {
        console.log("burada")
        console.log(phone)
        try {
            if (phone) {
                console.log("buradaaa")
                console.log(phone)
                if (!phoneRegex.test(phone as string)) {
                    throw new Error("Please provide a valid phone number");
                }
                account.createPhoneToken(ID.unique(), `+90${phone as string}`).then((response) => {
                    console.log(response)
                    setUserId(response.userId)
                    setPhoneVerification(true);
                }).catch((error) => {
                    toast.error((error as Error).message, {
                        position: "bottom-right"
                    });
                });
                setPhoneVerification(true);
                toast.success("Login successful", {
                    position: "bottom-right"
                });
                navigate("/dashboard");
            } else {
                console.log("buraya mı girdi")
                if (!emailRegex.test(email as string)) {
                    throw new Error("Please provide a valid email");
                }

                if (!passwordRegex.test(password as string)) {
                    throw new Error("Please provide a valid password");
                }
                account.createEmailPasswordSession(
                    email as string,
                    password as string
                ).then((response) => {
                    setUser(response);
                    toast.success("Login successful", {
                        position: "bottom-right"
                    });
                    navigate("/dashboard");
                }).catch((error) => {
                    toast.error((error as Error).message, {
                        position: "bottom-right"
                    });
                });
            }
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
            navigate("/login");
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
            navigate("/");
        } catch (error) {
            toast.error((error as Error).message, {
                position: "bottom-right"
            });
            throw new Error((error as Error).message);
        }
    }

    const phoneVerificationAction = async (token: string) => {
        try {
            console.log(token)
            const session = await account.updatePhoneSession(
                userId as string,
                token as string
            )
            setUser(session);
            console.log(session)
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
        logoutAction,
        phoneVerification,
        phoneVerificationAction
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
