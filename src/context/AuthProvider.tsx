import { createContext, useContext, useState } from "react";
import { emailRegex, passwordRegex } from "../helper/consts";
import { account } from "../lib/appwrite";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import type { Models } from "appwrite";
// export interface defaultAuthContext {
//     user: Models.Session | null;
//     setUser?: (Models.Session | null) => void;
//     loginAction: (email: string, password: string) => void;
//     logoutAction?: () => void;
// };

// const defaultAuthContext: defaultAuthContext = {
//     user: null,
//     loginAction: async (email: string, password: string) => {
//         try {
//             if (email === "" || password === "") {
//                 throw new Error("Please provide a valid input");
//             }

//             if (!emailRegex.test(email as string)) {
//                 throw new Error("Please provide a valid email");
//             }

//             if (!passwordRegex.test(password as string)) {
//                 throw new Error("Please provide a valid password");
//             }

//             const result: Models.Session = await account.createEmailPasswordSession(
//                 email as string,
//                 password as string
//             );



//             toast.success("Login successful");
//             return redirect("/");
//         } catch (error) {
//             toast.error((error as Error).message);
//             throw new Error((error as Error).message);
//         }
//     },
// }

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
            console.log("denedikkk")
            setUser(result);
            toast.success("Login successful");
            return redirect("/");
        } catch (error) {
            toast.error((error as Error).message);
            throw new Error((error as Error).message);
        }
    }

    const registerAction = async (email: string, password: string, name: string) => { }

    const store = {
        user,
        loginAction
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


