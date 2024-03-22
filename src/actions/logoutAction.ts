// import { clearLocalStorage } from "../helper";
import { redirect } from "react-router-dom";
export const logoutAction = () => {
//   clearLocalStorage();
  return redirect("/login");
};
