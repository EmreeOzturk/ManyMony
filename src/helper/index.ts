import { Budget } from "../types";

export const fetchDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};
export const saveDataToLocalStorage = (key: string, value: string | []) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export const removeDataFromLocalStorage = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
export const clearLocalStorage = () => {
  localStorage.clear();
};
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const createBudget = async (
  budgetName: string,
  budgetAmount: string
) => {
  await wait(2000);
  const newBudget: Budget = {
    id: crypto.randomUUID(),
    name: budgetName,
    amount: +budgetAmount,
    createdAt: Date.now(),
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  };

  const budgets: Budget[] = fetchDataFromLocalStorage("budgets") ?? [];
  return saveDataToLocalStorage("budgets", [
    ...budgets,
    newBudget,
  ] as unknown as []);
};
