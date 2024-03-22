import { fetchDataFromLocalStorage } from "../helper";
export const dashboardLoader = () => {
  const data = fetchDataFromLocalStorage("dashboard");
  if (data) {
    return data;
  }
  return null;
};
