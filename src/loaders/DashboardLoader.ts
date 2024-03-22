import { fetchDataFromLocalStorage } from "../helper";
export const dashboardLoader = () => {
  const userName = fetchDataFromLocalStorage("userName");
  const budgets = fetchDataFromLocalStorage("budgets");
  if (userName || budgets) {
    return { userName, budgets };
  }
  return { userName: "" };
};
