import { fetchDataFromLocalStorage } from "../helper";
export const dashboardLoader = () => {
  const data = fetchDataFromLocalStorage("dashboard");
  if (data) {
    return { userName: data as string };
  }
  return null;
};
