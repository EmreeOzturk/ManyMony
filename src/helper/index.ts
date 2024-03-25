import { Budget, Expense } from "../types";

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

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formatPercentage = (total: number, value: number) => {
  return `${Math.round((value / total) * 100)}%`;
};

export const formatDateToLocaleString = (date: number) => {
  return new Date(date).toLocaleString();
};

export const calculateTotalExpensesByBudgetId = (budgetId: string) => {
  const expenses: Expense[] = fetchDataFromLocalStorage("expenses") ?? [];
  return expenses
    .filter((expense) => expense.budgetId === budgetId)
    .reduce((acc, expense) => acc + expense.amount, 0);
};

export const findBudgetPropsById = (budgetId: string) => {
  const budgets: Budget[] = fetchDataFromLocalStorage("budgets") ?? [];
  const budget = budgets.find((budget) => budget.id === budgetId);
  return budget;
};

export const createBudget = async (
  budgetName: string,
  budgetAmount: string
) => {
  await wait(1000);
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

export const createExpense = async (
  budgetId: string,
  expenseName: string,
  expenseAmount: string
) => {
  await wait(1000);
  const newExpense = {
    id: crypto.randomUUID(),
    name: expenseName,
    amount: +expenseAmount,
    budgetId,
    createdAt: Date.now(),
  };

  const expenses = fetchDataFromLocalStorage("expenses") ?? [];
  return saveDataToLocalStorage("expenses", [
    ...expenses,
    newExpense,
  ] as unknown as []);
};
