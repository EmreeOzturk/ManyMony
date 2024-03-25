export type Budget = {
  id: string;
  name: string;
  amount: number;
  createdAt: number;
  color: string;
};

export type Expense = {
  id: string;
  budgetId: string;
  name: string;
  amount: number;
  createdAt: number;
};
