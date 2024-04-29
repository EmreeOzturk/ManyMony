import type { ActionFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { emailRegex, passwordRegex } from "../helper/consts";

type authActionProps = {
  request: Request;
};
export const authAction: ActionFunction<authActionProps> = async ({
  request,
}) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");
  console.log(request.url);
  if (actionType === "login") {
    try {
      console.log("geldi");
      const email = formData.get("email");
      const password = formData.get("password");

      if (email === "" || password === "") {
        alert("Please provide a valid input");
        // throw new Error("Please provide a valid input");
      }

      if (!emailRegex.test(email as string)) {
        alert("Please provide a valid email");
        // throw new Error("Please provide a valid email");
      }

      if (!passwordRegex.test(password as string)) {
        alert("Please provide a valid password");
        // throw new Error("Please provide a valid password");
      }

      // call login action
      //   loginAction();
      // appwrite api endpoint
      toast.success("Login successful");
      return redirect("/");
    } catch (error) {
      toast.error((error as Error).message);
      //   throw new Error((error as Error).message);
    }
  }
  //   if (actionType === "register") {
  //     try {
  //       const email = formData.get("email");
  //       const password = formData.get("password");

  //       if (email === "" || password === "") {
  //         throw new Error("Please provide a valid input");
  //       }

  //       if (!emailRegex.test(email as string)) {
  //         throw new Error("Please provide a valid email");
  //       }

  //       if (!passwordRegex.test(password as string)) {
  //         throw new Error("Please provide a valid password");
  //       }
  //       // call register action
  //       //   registerAction();
  //       // appwrite api endpoint
  //       toast.success("Register successful");
  //       return redirect("/login");
  //     } catch (error) {
  //       toast.error((error as Error).message);
  //       throw new Error((error as Error).message);
  //     }
  //   }

  //   if (actionType === "logout") {
  //     try {
  //       // call logout action
  //       //   logoutAction();
  //       return redirect("/login");
  //     } catch (error) {
  //       toast.error((error as Error).message);
  //       throw new Error((error as Error).message);
  //     }
  //   }
};
