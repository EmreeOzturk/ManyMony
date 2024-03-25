import { fetchDataFromLocalStorage } from "../helper";
export const dashboardLoader = () => {
  const userName = fetchDataFromLocalStorage("userName");
  const budgets = fetchDataFromLocalStorage("budgets");
  const expenses = fetchDataFromLocalStorage("expenses");
  if (userName || budgets || expenses) {
    return { userName, budgets, expenses };
  }
  return { userName: "" };
};
