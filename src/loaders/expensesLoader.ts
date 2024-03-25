import { fetchDataFromLocalStorage } from "../helper";
export const expensesLoader = () => {
  const expenses = fetchDataFromLocalStorage("expenses");
  if (expenses) {
    return { expenses };
  }
  return { expenses: [] };
};
