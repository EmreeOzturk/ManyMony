import { toast } from "react-toastify";
import { clearLocalStorage } from "../helper";
import { redirect } from "react-router-dom";
export const logoutAction = () => {
  clearLocalStorage();
  toast.promise(Promise.resolve(), {
    pending: "Logging out...",
    success: "Logged out successfully",
    error: "Failed to logout",
  });
  return redirect("/");
};
