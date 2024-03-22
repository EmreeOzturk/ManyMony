import { fetchDataFromLocalStorage } from "../helper";
export const dashboardLoader = () => {
  const data = fetchDataFromLocalStorage("userName");
  if (data) {
    return { userName: data as string };
  }
  return { userName: "" };
};
