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

  if (actionType === "login") {
    try {
      const email = formData.get("email");
      const password = formData.get("password");

      if (email === "" || password === "") {
        throw new Error("Please provide a valid input");
      }

      if (!emailRegex.test(email as string)) {
        throw new Error("Please provide a valid email");
      }

      if (!passwordRegex.test(password as string)) {
        throw new Error("Please provide a valid password");
      }
      // call login action
      loginAction();
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  }
  if (actionType === "register") {
    try {
      const email = formData.get("email");
      const password = formData.get("password");

      if (email === "" || password === "") {
        throw new Error("Please provide a valid input");
      }

      if (!emailRegex.test(email as string)) {
        throw new Error("Please provide a valid email");
      }

      if (!passwordRegex.test(password as string)) {
        throw new Error("Please provide a valid password");
      }
      // call register action
      registerAction();
      return redirect("/login");
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  }

  if (actionType === "logout") {
    try {
      // call logout action
      logoutAction();
      return redirect("/login");
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    }
  }
};