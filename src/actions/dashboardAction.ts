import { toast } from "react-toastify";
// import { saveDataToLocalStorage } from "../helper";
import type { ActionFunction } from "react-router-dom";
import { saveDataToLocalStorage } from "../helper";
export const dashboardAction: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const data = await request.formData();
  const userName = data.get("userName");
  try {
    saveDataToLocalStorage("userName", userName?.toString() || "");
    return toast.success(`Welcome ${userName}`);
  } catch (error) {
    toast.error("Failed to create account");
    throw new Error("Failed to create account");
  }
  console.log({ data, request, userName });
};
